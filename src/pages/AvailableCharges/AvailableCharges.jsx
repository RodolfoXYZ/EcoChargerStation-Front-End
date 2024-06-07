import React from 'react';
import './AvailableCharges.css';

const AvailableCharges = () => {
  return (
    <div className="available-charges-container">
      <h2>RECARGAS DISPONÍVEIS</h2>
      <p>Aqui ficam todas as suas recargas pendentes, após o pagamento, elas são automaticamente arquivadas e mandadas para o histórico de recargas.</p>
      
      <div className="charge-item">
        <div className="car-info">
          <img src="" alt="Volvo S90" className="car-image" />
          <h3 className="car-name">Volvo S90</h3>
        </div>
        <div className="charge-details">
          <p className='payment'>Realizado pagamento</p>
          <p>Cafeteria Paço Alfandega</p>
          <p>R. Alfândega, 35 - Recife</p>
          <p>ID: <span>4H9Z8D7J</span></p>
          <p>Recarga: <span>109kWh</span></p>
          <p>Total: <span>R$ 37,90</span></p>
        </div>
      </div>
      
      <div className="charge-item">
        <div className="car-info">
          <img src="" alt="Wolkswagen Nivus" className="car-image" />
          <h3 className="car-name">Nivus</h3>
        </div>
        <div className="charge-details">
        <p className='payment'>Realizado pagamento</p>
          <p>Cafeteria Paço Alfandega</p>
          <p>R. Alfândega, 35 - Recife</p>
          <p>ID: <span>4H9Z8D7J</span></p>
          <p>Recarga: <span>109kWh</span></p>
          <p>Total: <span>R$ 37,90</span></p>
        </div>
      </div>
    </div>
  );
};

export default AvailableCharges;
