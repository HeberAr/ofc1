import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Exames.module.css";
const Exames = () => {
  const navigate = useNavigate();

  const onCaixaEntarClick = useCallback(() => {
    navigate("/pgina-inicial");
  }, [navigate]);

  return (
    <div className={styles.exames}>
      <img className={styles.barra2Icon} alt="" src="/undefined4.png" />
      <img className={styles.examesChild} alt="" src="/undefined5.png" />
      <div className={styles.exameMarca}>
        <div className={styles.hemograma}>
          <ul className={styles.hemograma1}>Hemograma</ul>
        </div>
        <div className={styles.ureiaECreatininaContainer}>
          <ul className={styles.hemograma1}>{`Ureia e Creatinina `}</ul>
        </div>
        <div className={styles.colesterol}>
          <ul className={styles.hemograma1}>Colesterol</ul>
        </div>
        <div className={styles.glicemia}>
          <ul className={styles.hemograma1}>Glicemia</ul>
        </div>
      </div>
      <i className={styles.exames1}>
        <p className={styles.exames2}>Exames</p>
      </i>
      <button className={styles.caixaEntar1} onClick={onCaixaEntarClick}>
        <div className={styles.caixaEntarChild} />
        <div className={styles.voltar}>
          <p className={styles.exames2}>Voltar</p>
        </div>
      </button>
    </div>
  );
};

export default Exames;
