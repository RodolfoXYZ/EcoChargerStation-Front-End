import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ChargingPointEdit.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function ChargingPointEdit() {
  const [chargingPoint, setChargingPoint] = useState({
    id: '4H2987DJ',
    connectorType: 'type2',
    status: 'available',
  });

  const handleUpdateChargingPoint = () => {
    console.log('Ponto de recarga atualizado:', chargingPoint);
    // Adicione a lógica de atualização aqui
  };

  return (
    <div className={styles.wrapperContent}>
      <Link to="/" className={styles.backButton}>
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        <span className={styles.backText}>Voltar</span>
      </Link>
      <div className={styles.chargingPointEdit}>
        <div className={styles.chargingPointIcon}>
          <img src="./images/chargingPoint.svg" alt="Ponto de Recarga" width="100" height="100" />
        </div>
        <h2 className={styles.title}>Editar Ponto de Recarga</h2>
        <h3 className={styles.placeName}>Cafeteria Paço Alfândega</h3>
        <label htmlFor="connector-type" className={styles.label}>Tipo de Conector</label>
        <select
          id="connector-type"
          value={chargingPoint.connectorType}
          onChange={(e) => setChargingPoint({ ...chargingPoint, connectorType: e.target.value })}
          className={styles.select}
        >
          <option value="type2">CONECTOR TIPO 2 - IEC 62196</option>
          <option value="type3">CONECTOR TIPO 3 - IEC 62196</option>
        </select>
        <label htmlFor="status" className={styles.label}>Status</label>
        <select
          id="status"
          value={chargingPoint.status}
          onChange={(e) => setChargingPoint({ ...chargingPoint, status: e.target.value })}
          className={styles.select}
        >
          <option value="available">Disponível</option>
          <option value="unavailable">Indisponível</option>
        </select>
        <div className={styles.btnWrapper}>
          <button className={styles.updateButton} onClick={handleUpdateChargingPoint}>Atualizar</button>
        </div>
      </div>
    </div>
  );
}

export default ChargingPointEdit;
