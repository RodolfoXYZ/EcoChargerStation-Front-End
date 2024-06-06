import React from 'react';
import {useLocation, useNavigate} from "react-router-dom"
import VehicleInfo from '../components/VehicleInfo/VehicleInfo';
import './../styles/DeleteVehicleSuccessPage.css';

const DeleteVehicleSuccessPage = () => {
  const params = useLocation();
  const navigate = useNavigate();
  
  return (
    <div className="delete-success-page">
      <VehicleInfo vehicle={params.state} /> {/* Passar o objeto vehicle como prop */}
      <p className="delete-success-message">DELETADO COM SUCESSO!</p>
    </div>
  );
};

export default DeleteVehicleSuccessPage;
