import React, { useState } from 'react';
import './AddEstablishment.css';
import axios from 'axios';

const AddEstablishment = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await (await fetch("https://viacep.com.br/ws/" + address + "/json/")).json();
    console.log(result)
  
  };

  return (
    <div className="add-establishment-container">
      <form className="add-establishment-form" onSubmit={handleSubmit}>
        <h2>Cadastro de estabelecimento</h2>
        <div className="form-group">
          <label>Nome do Estabelecimento</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Endereço</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Descrição</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="confirm-button">Confirmar</button>
      </form>
    </div>
  );
};

export default AddEstablishment;
