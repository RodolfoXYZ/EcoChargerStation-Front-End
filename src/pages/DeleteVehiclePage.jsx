import { useState } from 'react';
import {useLocation,useNavigate} from "react-router-dom"
import VehicleInfo from '../components/VehicleInfo/VehicleInfo';
import './../styles/DeleteVehiclePage.css';
import { deleteVehicleById } from '../services/User';

export default function DeleteVehiclePage(){
  
  const params = useLocation();
  const navigation = useNavigate();


  
  function deleteVehicle(){
    deleteVehicleById(params.state.id)
    navigation("/DeleteVehicleSuccessPage", {state: params.state})
  };

  function returnBeforePage(){
  };

  return (
    <div className="delete-vehicle-page">
      <VehicleInfo vehicle={params.state} notShowId={false} /> {/* Passar o objeto vehicle como prop */}
      <p className="delete-vehicle-message">Deseja deletar o cadastro desse veículo?</p>
      <div className="delete-buttons">
      <button className="generic-button" onClick={deleteVehicle}>Sim</button>
      <button className="generic-button not-delete" onClick={returnBeforePage}>Não</button>
      </div>
    </div>
  );
};