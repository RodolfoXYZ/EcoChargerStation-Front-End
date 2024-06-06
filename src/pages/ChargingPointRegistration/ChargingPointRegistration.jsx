import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ChargingPointRegistration.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function ChargingPointRegistration() {
  return (
    <div className={styles.wrapperContent}>
      <Link to="/" className={styles.backButton}>
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        <span className={styles.backText}>Voltar</span>
      </Link>
      <div className={styles.chargingPointRegistration}>
        <div className={styles.chargingPointIcon}>
          <img src="./chargingPoint.svg" alt="Ponto de Recarga" width="80" height="80" />
        </div>
        <h2 className={styles.title}>Cadastro de Pontos de Recarga</h2>
        <h3 className={styles.placeName}>Cafeteria Paço Alfandega</h3>
        <label htmlFor="connector-type" className={styles.label}>Tipo de Conector</label>
        <select id="connector-type" className={styles.select}>
          <option value="type2">CONECTOR TIPO 2 - IEC 62196</option>
          <option value="type3">CONECTOR TIPO 3 - IEC 62196</option>
        </select>
        <div className={styles.btnWrapper}>
          <button className={styles.registerButton}>CADASTRAR</button>
        </div>
      </div>
    </div>
  );
}

export default ChargingPointRegistration;
