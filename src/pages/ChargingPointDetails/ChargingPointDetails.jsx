import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ChargingPointDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function ChargingPointDetails() {
  const chargingPoint = {
    establishmentName: "Cafeteria Paço Alfândega",
    id: "4H2987DJ",
    status: "Disponível",
    faturamento: "R$ 3921,97",
    consumo: "1000 kWh"
  };

  return (
    <div className={styles.wrapperContainer}>
      <Link to="/" className={styles.backButton}> 
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        <span className={styles.backText}>Voltar</span>
      </Link>
      <div className={styles.chargingPointDetails}>
        <div className={styles.chargingPointIcon}>
          <img src="./chargingPoint.svg" alt="Ponto de Recarga" width="100" height="100" />
        </div>
        <h2 className={styles.establishmentName}>{chargingPoint.establishmentName}</h2>
        <p>ID: <span>{chargingPoint.id}</span></p>
        <p><span className={chargingPoint.status === "Disponível" ? styles.green : styles.red}>{chargingPoint.status}</span></p>
        <div className={styles.info}>
          <div className={styles.infoBox}>
            <p>Faturamento</p>
            <p className={styles.value}>R$ 3921,97</p>
          </div>
          <div className={styles.infoBox}>
            <p>Consumo</p>
            <p className={`${styles.value} ${styles.blue}`}>1000 kWh</p>
          </div>
        </div>
        <Link to="/editar-ponto-recarga" className={styles.editButton}>
          <FontAwesomeIcon icon={faEdit} />
          <span>Editar</span>
        </Link>
      </div>
    </div>
  );
}

export default ChargingPointDetails;
