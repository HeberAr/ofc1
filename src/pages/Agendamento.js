import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Agendamento.module.css";
const Agendamento = () => {
  const navigate = useNavigate();

  const onUsurioTextClick = useCallback(() => {
    navigate("/loginagendamento");
  }, [navigate]);

  const onCadastreSeTextClick = useCallback(() => {
    navigate("/cadastroconsultaagendamento");
  }, [navigate]);

  const onCaixaEntarClick = useCallback(() => {
    navigate("/pgina-inicial");
  }, [navigate]);

  return (
    <div className={styles.agendamento}>
      <img className={styles.barra2Icon} alt="" src="/undefined6.png" />
      <i className={styles.agendeSuaConsulta1}>Agende sua Consulta</i>
      <div className={styles.login}>
        <i className={styles.usurio} onClick={onUsurioTextClick}>
          {` `}
          <span className={styles.usurio1}>usuário</span>
          {` `}
        </i>
        <i className={styles.ou}>{`ou `}</i>
        <i className={styles.entreComSeu1}>{`Entre com seu `}</i>
        <i className={styles.cadastreSe} onClick={onCadastreSeTextClick}>
          Cadastre-se
        </i>
      </div>
      <div className={styles.exameMarca}>
        <i className={styles.qualExameDeseja1}>Qual exame deseja marcar ?</i>
        <i className={styles.qualMdico1}>Qual Médico ?</i>
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
        <div className={styles.drCarlosAlbertoContainer}>
          <ul className={styles.hemograma1}>Dr Carlos Alberto Lobos</ul>
        </div>
        <div className={styles.drRicardoOliveiraContainer}>
          <ul
            className={styles.hemograma1}
          >{`Dr Ricardo Oliveira Dos Santos `}</ul>
        </div>
        <div className={styles.draCecliaMedeirosContainer}>
          <ul className={styles.hemograma1}>Dra Cecília Medeiros Silva</ul>
        </div>
        <div className={styles.draAdrianaLimaContainer}>
          <ul className={styles.hemograma1}>Dra Adriana Lima Barbosa</ul>
        </div>
      </div>
      <img className={styles.agendamentoChild} alt="" src="/undefined7.png" />
      <button className={styles.caixaEntar1} onClick={onCaixaEntarClick}>
        <div className={styles.caixaEntarChild} />
        <div className={styles.pronto}>Pronto</div>
      </button>
    </div>
  );
};

export default Agendamento;
