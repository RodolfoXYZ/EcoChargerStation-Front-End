import React, { useState } from 'react';
import './PagamentoRecarga.css';
import '../Login/Login.css';
import { useLocation, useNavigate } from "react-router-dom"
import InputMask from 'react-input-mask';
import { FaCreditCard } from 'react-icons/fa';
import { FaPix } from 'react-icons/fa6';

export default function PagamentoRecarga() {


  const params = useLocation();
  const navigate = useNavigate();
  console.log(params)
  const [value, setValue] = useState('');
  const [kwValue, setKwValue] = useState('0');
  const [totalValue, setTotalValue] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  const handleValueChange = (e) => {
    let val = e.target.value;
    val = val.replace(/\D/g, ''); 
    val = (Number(val) / 100).toFixed(2) + ''; 
    setTotalValue(Number(val))
    setKwValue(Number(val) * params.state.value)
    val = val.replace('.', ','); 
    val = val.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'); 
    
    setValue('R$ ' + val); 

  };

  const handleKwChange = (e) => {
    let val = e.target.value;
    val = val.replace(/\D/g, ''); 
    val = (Number(val) / 100).toFixed(2) + ''; 
    setKwValue(val); 
  };

  const handleButtonClick = (option) => {
    setSelectedOption(option);
    console.log(option);
  };

  return (
    <section className='containerGeral'>
      <p>Carro escolhido:</p>
      <img src="./logo.png" alt="IMAGEM DO CARRO ESCOLHIDO" />
      <p>passar via props o nome do veiculo</p>
      <div className='recarga'>
        <p>Digite o valor da sua recarga:</p>
        <InputMask
          mask=""
          placeholder='R$ 0,00'
          value={value}
          onChange={handleValueChange}
          className='input-field'
        />
      </div>
      <div className='recarga'>
        <p>Recarga em kW/h:</p>
        <InputMask
          mask=""
          placeholder='0,00 kW/h'
          value={kwValue + "kW/h"}
          className='input-field'
        />
      </div>
      <div className='options-container'>
        <p>Selecione o método de pagamento</p>
        <div className='button-container'>
          <button
            className={`option-button ${selectedOption === 'pix' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('pix')}
          >
            <FaPix className='button-icon' />
            <p className='button-text'>PIX</p>
          </button>
          <button
            className={`option-button ${selectedOption === 'credito' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('credito')}
          >
            <FaCreditCard className='button-icon' />
            <p className='button-text'>Crédito</p>
          </button>
        </div>
      </div>
      <button
      onClick={()=>{
        if(selectedOption === "pix"){
          navigate("/pixpaymentpage",{
            state: {...params.state, total: totalValue},
          })
        }
        else{
          navigate("/pixpaymentpage", {
            state: {...params.state, total: totalValue}
          })
        }
      }}
      
      className="botaoGenerico"> REALIZAR PAGAMENTO </button>
    </section>
  );
}
