import React from 'react';
import { Link } from 'react-router-dom';
import ChargingPointImage from '../../images/chargingPoint.svg';
import styles from './ChargingPoint.module.css';

function ChargingPoint({ id, status, connectorType, linkTo }) {
  return (
    <Link to={linkTo} className={styles.chargingPoint}>
      <div className={styles.chargingPointIcon}>
        <img src={ChargingPointImage} alt="Ponto de Recarga" width="80" height="80" />
      </div>
      <div className={styles.chargingPointInfo}>
        <p className={styles.title}>PONTO DE RECARGA</p>
        <p>Conector {connectorType}</p>
        <p>ID: {id}</p>
        <p className={`${styles.status} ${status === "DISPONÍVEL" ? styles.green : styles.red}`}>{status}</p>
      </div>
      <div className={styles.chargingPointArrow}>
        <span>&gt;</span>
      </div>
    </Link>
  );
}

export default ChargingPoint;
