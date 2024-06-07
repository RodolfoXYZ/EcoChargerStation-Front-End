import React from 'react';
import './../styles/SideBar.css';
import { useNavigate } from 'react-router-dom';

const SideBarPage = () => {
  const navigation = useNavigate();
  return (
    <div className="sidebar">
      <img src="./logo.png" alt="Logo" className="sidebar-logo" />
      <hr className="divider" />
      <div onClick={()=> navigation("/homeclient")} className="sidebar-item">VOLTAR</div>
      <hr className="divider" />
      <div onClick={()=> navigation("/allVehicles")} className="sidebar-item">MEUS VEÍCULOS</div>
      <hr className="divider" />
      <div className="sidebar-item">MINHAS RECARGAS</div>
      <hr className="divider" />
      <div className="sidebar-item">HISTÓRICO DE RECARGAS</div>
      <hr className="divider" />
      <div className="sidebar-item" onClick={()=>{
        localStorage.removeItem("key");
        navigation("/")
      }}>SAIR</div>
      <hr className="divider" />
    </div>
  );
};

export default SideBarPage;
