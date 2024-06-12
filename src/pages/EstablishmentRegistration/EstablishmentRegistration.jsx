import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { faEdit, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function EstablishmentRegistration() {
  return (
    <div className="wrapper-container">
      <Link to="/detalhes-ponto-recarga" className='backButton' >
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        <span className="backText">Voltar</span>
      </Link>
      <div className="establishment-registration">
        <div className="header-icon">
          <img src="./estabelecimento.svg" alt="Ponto de Recarga" width="100" height="100" />
        </div>
        <h2>Cafeteria Paço Alfandega</h2>
        <div className="info">
          <div className="info-box">  
            <p>Faturamento</p>
            <p className="value">R$ 3921,97</p>
          </div>
          <div className="info-box">
            <p>Consumo</p>
            <p className="value blue">1000 kWh</p>
          </div>
        </div>
        <h3>Todos os Pontos de Recarga</h3>
        <p className="description">
          Aqui ficam todos os seus pontos de recarga, você pode visualizá-los e editar caso ache necessário.
        </p>
        <div className="charging-points">
          <Link to="/detalhes-ponto-recarga" className="charging-point">
            <div className="charging-point-icon">
              <img src="./chargingPoint.svg" alt="Ponto de Recarga" width="80" height="80" />
            </div>
            <div className="charging-point-info">
              <p className="title">PONTO DE RECARGA</p>
              <p>Conector Tipo 2 - IEC 62196</p>
              <p>ID: 4H2987DJ</p>
              <p className="status">DISPONÍVEL</p>
            </div>
            <div className="charging-point-arrow">
              <span>&gt;</span>
            </div>
          </Link>
          <div className='margin'>
            <Link to="/detalhes-ponto-recarga" className="charging-point">
              <div className="charging-point-icon">
                <img src="./chargingPoint.svg" alt="Ponto de Recarga" width="80" height="80" />
              </div>
              <div className="charging-point-info">
                <p className="title">PONTO DE RECARGA</p>
                <p>Conector Tipo 2 - IEC 62196</p>
                <p>ID: 4H2987DJ</p>
                <p className="status">DISPONÍVEL</p>
              </div>
              <div className="charging-point-arrow">
                <span>&gt;</span>
              </div>
            </Link>
          </div>
        </div>
        <Link to="/cadastrar-ponto-de-recarga">
         
          <button className='botaoEstablish' >Adicionar</button>
        </Link>
      </div>
    </div>
  );
}

export default EstablishmentRegistration;
