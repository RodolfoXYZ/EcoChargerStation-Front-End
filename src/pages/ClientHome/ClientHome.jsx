import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './ClientHome.module.css';
import L from 'leaflet';
import { GetAllPoints, getAllVehicleById, vehiclesRegistereds } from '../../services/User';
import { useNavigate } from 'react-router-dom';

const ClientHome = () => {

  const navigation = useNavigate();
  const [stations, setStations] = useState([]);
  const [address, setAddress] = useState("");
  const [position, setPosition] = useState([0,0]);
  const [loading, setLoading] = useState(true)
  const [allVehicles, setAllVehicles] = useState([])
  const [selectedStation, setSelectedStation] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition([position.coords.latitude, position.coords.longitude])
      setLoading(false);
      getAllVehicleById().then(result => setAllVehicles(result));

      GetAllPoints(position.coords.latitude, position.coords.longitude).then(result => {
        setStations(result)
        console.log(result)
      })
    })
  }, [])


  const handleMarkerClick = (station) => {
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${station.latitude}&lon=${station.longitude}`)
            .then(response => response.json())
            .then(data => {
              setAddress(data.display_name);
            })
            .catch(error => {
              console.error('Error fetching address:', error);
            });
    setSelectedStation(station);
  };
// Coordenadas de Recife, Brasil

  const customMarker = new L.Icon({
    iconUrl: "./chargingPointMap.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
  });

  return (
    <div className={styles.clientHomeContainer}>
      <header className={styles.header}>
        <div onClick={()=> navigation("/SideBarPage")} className={styles.menuIcon}>&#9776;</div>
        <input onChange={() => { }} type="text" placeholder="Informe o destino" className={styles.searchInput} />
        <div className={styles.profileIcon}>&#128100;</div>
      </header>
      {
        !loading && (
          <MapContainer center={position} zoom={15} style={{
            position: 'fixed',
            height: "100vh"
          }} scrollWheelZoom={false} className={styles.map}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {stations.map((station) =>
              <Marker
                key={station.id}
                position={[station.latitude, station.longitude]}
                icon={customMarker}
                eventHandlers={{ click: () => handleMarkerClick(station) }}
                className={selectedStation === station ? styles.selectedMarker : ""}
              >
              </Marker>
    
    
            )}
          </MapContainer>
        )

      }
      <div
        onClick={() => setSelectedStation(null)}
        style={{
          display: !selectedStation ? "none" : "flex",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          position: 'fixed',
          zIndex: 4,
          backgroundColor: "#FFFFFF60",
          backdropFilter: "blur(3px)"
        }}></div>
      <div className={`${styles.detailsContainer} ${selectedStation !== null ? styles.showContainer : styles.hideContainer}`}>
        <h2>{selectedStation?.stationName || ""}</h2>
        <p>{selectedStation?.stationDescription || ""}</p>
        <p><strong>Endereço:</strong> {address}</p>
        <h3>Selecione o seu Veículo</h3>
        <div className={styles.carSelectionContainer}>
          <div className={styles.carSelection}>
          {allVehicles.map((car, index) => (
              <div onClick={()=>{
                console.log(selectedStation)
                navigation("/chooseYourMethod", {
                  state:{
                    value: selectedStation.price,
                    stablishing_id: selectedStation.id
                  }
                })
              }} key={index} className="car-wrapper">
                <img src={vehiclesRegistereds.filter(x => x.model === car.model)[0].image} alt={car} />
                <p className="car-name">{car.model}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientHome;
