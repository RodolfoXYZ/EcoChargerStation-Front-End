import React, { useState } from 'react';
import './AddEstablishment.css';
import { useNavigate } from 'react-router-dom';
import { registerEstablishment } from '../../services/SupplierService';

const AddEstablishment = () => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const sucesso = await registerEstablishment({ nome, endereco, preco, descricao });
      if (sucesso) {
        navigate('/EstablishmentRegistration');
      } else {
        alert('Erro ao registrar estabelecimento. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao registrar estabelecimento:', error);
      alert('Erro ao registrar estabelecimento. Tente novamente.');
    }
  };

  return (
    <div className="add-establishment-container">
      <form className="add-establishment-form" onSubmit={handleSubmit}>
        <h2>Cadastro de estabelecimento</h2>
        <div className="form-group">
          <label>Nome do Estabelecimento</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Endereço</label>
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Preço</label>
          <input
            type="text"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Descrição</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <button type="submit" className="confirm-button">Confirmar</button>
      </form>
    </div>
  );
};

export default AddEstablishment;
