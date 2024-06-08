import React, { useEffect } from 'react';
import VehicleInfo from '../components/VehicleInfo/VehicleInfo';
import './../styles/CreateVehicleSuccessPage.css';
import { useLocation, useNavigation } from 'react-router-dom';

const CreateVehicleSuccessPage = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(()=> navigation("/allvehicles"),4000)
  }, [])


  const params = useLocation();
  console.log(params)
  return (
    <div className="create-success-page">
      <VehicleInfo vehicle={params.state} /> {/* Passar o objeto vehicle como prop */}
      <p className="create-success-message">VEÍCULO CADASTRADO COM SUCESSO!</p>
    </div>
  );
};

export default CreateVehicleSuccessPage;
