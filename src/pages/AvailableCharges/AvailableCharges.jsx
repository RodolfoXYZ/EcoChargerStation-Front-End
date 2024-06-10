import React, { useEffect, useState } from 'react';
import './AvailableCharges.css';
import { getAllRecharges, vehiclesRegistereds } from '../../services/User';
import { useNavigate } from 'react-router-dom';

const AvailableCharges = () => {


  const navigator = useNavigate()
  const [recharges, setRecharges] = useState([]);

  useEffect(() => {
    getAllRecharges().then(result => {
      
      setRecharges(result);
    })
    
  }, [])


  return (
    <div className="available-charges-container">
      <h2>RECARGAS DISPONÍVEIS</h2>
      <p>Aqui ficam todas as suas recargas pendentes, após o pagamento, elas são automaticamente arquivadas e mandadas para o histórico de recargas.</p>

      {
        recharges.map((recharge, index) => {
          return !recharge.isPayed && (
            <div onClick={()=>{
              recharge.availability && navigator("/QrScannerPage")
            }} className="charge-item">
              <div className="car-info" onClick={()=>{
              recharge.availability && navigator("/QrScannerPage")
            }}>
                <img onClick={()=>{
              recharge.availability && navigator("/QrScannerPage")
            }} src={vehiclesRegistereds.filter(x => x.model === recharge.model)[0].image} alt="Volvo S90" className="car-image" />
                <h3 onClick={()=>{
              recharge.availability && navigator("/QrScannerPage")
            }} className="car-name">{recharge.model}</h3>
              </div>
              <div className="charge-details">
                <p className='payment'>{recharge.availability ? "Realizado pagamento" : "Ainda não foi realizado o pagamento"}</p>
                <p>{recharge.name}</p>
                <p>ID: <span>{recharge.id}</span></p>
                <p>Recarga: <span>{(recharge.rechargeValue * recharge.quantityPerKw).toFixed(2)}kWh</span></p>
                <p>Total: <span>R$ {recharge.rechargeValue.toFixed(2)}</span></p>
              </div>
            </div>

          )
        })
      }

    </div>
  );
};

export default AvailableCharges;
