import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Mdicos.module.css";
const Mdicos = () => {
  const navigate = useNavigate();

  const onCaixaEntarClick = useCallback(() => {
    navigate("/pgina-inicial");
  }, [navigate]);

  return (
    <div className={styles.mdicos}>
      <img className={styles.barra2Icon} alt="" src="/undefined4.png" />
      <i className={styles.mdicos1}>{`Médicos `}</i>
      <div className={styles.exameMarca}>
        <div className={styles.drCarlosAlbertoContainer}>
          <ul className={styles.drCarlosAlberto1}>Dr Carlos Alberto Lobos</ul>
        </div>
        <div className={styles.drRicardoOliveiraContainer}>
          <ul
            className={styles.drCarlosAlberto1}
          >{`Dr Ricardo Oliveira Dos Santos `}</ul>
        </div>
        <div className={styles.draCecliaMedeirosContainer}>
          <ul className={styles.drCarlosAlberto1}>
            Dra Cecília Medeiros Silva
          </ul>
        </div>
        <div className={styles.draAdrianaLimaContainer}>
          <ul className={styles.drCarlosAlberto1}>Dra Adriana Lima Barbosa</ul>
        </div>
      </div>
      <img className={styles.mdicosChild} alt="" src="/undefined5.png" />
      <button className={styles.caixaEntar1} onClick={onCaixaEntarClick}>
        <div className={styles.caixaEntarChild} />
        <div className={styles.voltar}>
          <p className={styles.voltar1}>Voltar</p>
        </div>
      </button>
    </div>
  );
};

export default Mdicos;
