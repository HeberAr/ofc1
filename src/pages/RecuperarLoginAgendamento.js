import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RecuperarLoginAgendamento.module.css";
const RecuperarLoginAgendamento = () => {
  const navigate = useNavigate();

  const onCaixaEntarClick = useCallback(() => {
    navigate("/agendamento");
  }, [navigate]);

  return (
    <div className={styles.recuperarLoginagendamento}>
      <div className={styles.recuperarLoginagendamentoChild} />
      <div className={styles.recuperarLoginagendamentoItem} />
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

export default RecuperarLoginAgendamento;
