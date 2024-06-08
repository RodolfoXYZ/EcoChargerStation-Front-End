import React, { useEffect } from 'react';
import {useLocation, useNavigate} from "react-router-dom"
import VehicleInfo from '../components/VehicleInfo/VehicleInfo';
import './../styles/DeleteVehicleSuccessPage.css';

const DeleteVehicleFailed = () => {
  const params = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    setTimeout(()=>{
      navigate("/allvehicles")
    }, 3000)
  })


  return (
    <div className="delete-success-page">
      <VehicleInfo vehicle={params.state} /> {/* Passar o objeto vehicle como prop */}
      <p className="delete-failed-message">HOUVE UM ERRO AO TENTAR DELETAR SEU VEICULO!</p>
      <p className="delete-failed-message">VERIFIQUE SE ELE NAO POSSUE RECARGAS PENDENTES</p>
    </div>
  );
};

export default DeleteVehicleFailed;
