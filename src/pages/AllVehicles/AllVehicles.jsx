import './AllVehicles.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { getAllVehicleById, vehiclesRegistereds } from '../../services/User';

const AllVehicles = () => {

  const [data, setData] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    getAllVehicleById().then(result => setData(result))
  }, [])



  return (
    <div className="all-my-vehicles-container">
      <h2>TODOS MEUS VEÍCULOS</h2>
      {
        data.map((element) => {
          return (
            <div onClick={()=> navigation('/deletevehiclepage', {
              state: {id: element.vehicleId, image: `${vehiclesRegistereds.filter(x => x.model === element.model)[0].image}`, name: element.name}}
            )} id={element.vehicleId} className="vehicle-item">
              <img src={`${vehiclesRegistereds.filter(x => x.model === element.model)[0].image}`} alt="Volvo S90" />
              <div>
                <h3>{element.model}</h3>
                <p>ID: {element.vehicleId}</p>
              </div>
            </div>
          )
        })
      }
      <button onClick={()=> navigation('/createvehiclepage')} className="add-vehicle-button">+</button>
    </div>
  );
};

export default AllVehicles;
