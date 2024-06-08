import React, { useState } from 'react';
import './../styles/CreateVehiclePage.css';
import { AddVehicle, vehiclesRegistereds } from '../services/User';
import { useNavigate } from 'react-router-dom';
const CreateVehiclePage = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [vehicle, setVehicle] = useState(null);
  const navigation = useNavigate();

  const handleVehicleChange = (event) => {
    const selectedModel = event.target.value;
    setSelectedVehicle(selectedModel);
    const vehicleInfo = vehiclesRegistereds.find(vehicle => vehicle.model === selectedModel);
    setVehicle(vehicleInfo);
  };

  return (
    <div className="add-vehicle-page">
      <img style={{boxSizing: "content-box"}} src="./logo.png" alt="Logo" className="logo" />
      <h1 className="header-text">Estamos quase lá! Selecione o modelo do seu veículo.</h1>
      <div className="selector-container">
        <label className="selector-label" htmlFor="vehicle-selector">Marca e Modelo do Veículo</label>
        <select id="vehicle-selector" value={selectedVehicle} onChange={handleVehicleChange}>
          <option value="">Selecione um veículo</option>
          {vehiclesRegistereds.map((vehicle, index) => (
            <option key={index} value={vehicle.model}>{vehicle.model}</option>
          ))}
        </select>
      </div>
      {vehicle && (
        <div className="info-containers">
          <div className="information-box">
            <label className="info-label">Tipo de Conector Utilizado</label>
            <p className="info-content">{vehicle.connector}</p>
          </div>
          <div className="information-box">
            <label className="info-label">Capacidade de Bateria</label>
            <p className="info-content">{vehicle.battery}</p>
          </div>
        </div>
      )}
      <button style={{
        backgroundColor: "#0154FA",
        padding: "15px clamp(10px, 12vw, 120px)",
        marginTop: 'auto',
        color: "white"
      }}
      onClick={async ()=>{
        await AddVehicle(vehicle);
        navigation("/CreateVehicleSuccessPage", {
          state: vehicle
        });
      }}
      >Confirmar</button>
    </div>
  );
};

export default CreateVehiclePage;
