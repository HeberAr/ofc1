import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RecuperarLogin.module.css";
const RecuperarLogin = () => {
  const navigate = useNavigate();

  const onCaixaEntarClick = useCallback(() => {
    navigate("/pgina-inicial");
  }, [navigate]);

  return (
    <div className={styles.recuperarLogin}>
      <div className={styles.recuperarLoginChild} />
      <div className={styles.recuperarLoginItem} />
      <div className={styles.caixaDataRec1}>
        <i className={styles.nome}>{`Data de Nascimento : `}</i>
        <input className={styles.caixaDataRecChild} type="text" />
        <input className={styles.caixaDataRecItem} type="text" />
        <input className={styles.caixaDataRecInner} type="text" />
      </div>
      <div className={styles.caixaNomeRec1}>
        <i className={styles.nome}>{`Nome: `}</i>
        <input className={styles.caixaNomeRecChild} type="text" />
      </div>
      <div className={styles.caixaRgRec}>
        <i className={styles.nome}>{`RG: `}</i>
        <input className={styles.caixaNomeRecChild} type="text" />
      </div>
      <button className={styles.caixaTentarNov1}>
        <i className={styles.i}>___________________</i>
        <i className={styles.tentarNovamente}>Tentar Novamente</i>
      </button>
      <div className={styles.caixaRecupLogin1}>
        <i className={styles.recuperandoLogin}>Recuperando Login</i>
        <i className={styles.recuperandoLogin}>Recuperando Login</i>
        <img
          className={styles.caixaRecupLoginChild}
          alt=""
          src="/undefined2.png"
        />
      </div>
      <button className={styles.caixaEntar1} onClick={onCaixaEntarClick}>
        <div className={styles.caixaEntarChild} />
        <div className={styles.entrar}>Entrar</div>
      </button>
    </div>
  );
};

export default RecuperarLogin;
