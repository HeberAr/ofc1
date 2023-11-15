import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Contatos.module.css";
const Contatos = () => {
  const navigate = useNavigate();

  const onCaixaEntarClick = useCallback(() => {
    navigate("/pgina-inicial");
  }, [navigate]);

  return (
    <div className={styles.contatos}>
      <img className={styles.barra2Icon} alt="" src="/undefined4.png" />
      <img className={styles.contatosChild} alt="" src="/undefined5.png" />
      <div className={styles.exameMarca}>
        <div className={styles.div}>(82) 3354-7458</div>
        <div className={styles.div1}>(82) 99365-7447</div>
        <div className={styles.div2}>(82) 99885-4787</div>
      </div>
      <div className={styles.exameMarca1}>
        <div className={styles.div}>(82) 4002-8922</div>
        <div className={styles.div1}>(82) 99155-7441</div>
        <div className={styles.div2}>(82) 98881-6996</div>
      </div>
      <i className={styles.contatos1}>Contatos</i>
      <i className={styles.faleConosco}>Fale conosco:</i>
      <button className={styles.caixaEntar1} onClick={onCaixaEntarClick}>
        <div className={styles.caixaEntarChild} />
        <div className={styles.voltar}>
          <p className={styles.voltar1}>Voltar</p>
        </div>
      </button>
      <i className={styles.duvidasSobreCadastro1}>Duvidas Sobre cadastro:</i>
    </div>
  );
};

export default Contatos;
