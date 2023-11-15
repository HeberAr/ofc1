import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginAgendamento.module.css";
const LoginAgendamento = () => {
  const navigate = useNavigate();

  const onCaixaEsqueciLoginClick = useCallback(() => {
    navigate("/recuperar-login");
  }, [navigate]);

  const onCaixaBotoEntrarClick = useCallback(() => {
    navigate("/agendamento");
  }, [navigate]);

  return (
    <a className={styles.loginagendamento}>
      <div className={styles.loginagendamentoChild} />
      <div className={styles.loginagendamentoItem} />
      <div className={styles.caixaLoginEmail1}>
        <h3 className={styles.cpf}>{`Email: `}</h3>
        <input className={styles.inCpf} type="text" />
      </div>
      <div className={styles.caixaLoginCpf}>
        <h3 className={styles.cpf}>{`CPF: `}</h3>
        <input className={styles.inCpf} type="text" />
      </div>
      <button
        className={styles.caixaEsqueciLogin1}
        onClick={onCaixaEsqueciLoginClick}
      >
        <i className={styles.esqueciMeuLogin1}>{`Esqueci meu login `}</i>
        <i className={styles.i}>____________________</i>
      </button>
      <div className={styles.caixaLogin}>
        <h2 className={styles.login1}>Login</h2>
        <img className={styles.caixaLoginChild} alt="" src="/undefined2.png" />
      </div>
      <div className={styles.caixaBotoEntrar1} onClick={onCaixaBotoEntrarClick}>
        <div className={styles.entrar}>Entrar</div>
      </div>
    </a>
  );
};

export default LoginAgendamento;
