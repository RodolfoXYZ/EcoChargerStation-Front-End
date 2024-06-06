import { useNavigate } from 'react-router-dom';
import './EstablishmentHome.css';
import Button from '../../components/Button'

const EstablishmentHome = () => {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate.push('/adicionar-estabelecimento');
  };

  return (
    <div className="home-container">
      <div className="home-content">
      <img src="./LOGO.svg" alt="Ponto de Recarga" width="100" height="100" />
        <h1 className='title'>Seja bem-vindo ao EcoChargerStation, fornecedor!</h1>
        <p className='estab-paragraph'>Comece adicionando o seu estabelecimento.</p>
        <Button to="/add-estabelecimento" mobileText="+" desktopText="Adicionar" />
      </div>
    </div>
  );
};

export default EstablishmentHome;