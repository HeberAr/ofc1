import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
const Login = () => {
  const navigate = useNavigate();

  const onCaixaEsqueciLoginClick = useCallback(() => {
    navigate("/recuperar-login");
  }, [navigate]);

  const onCaixaCadastrarSeClick = useCallback(() => {
    navigate("/cadastro");
  }, [navigate]);

  const onCaixaBotoEntrarClick = useCallback(() => {
    navigate("/pgina-inicial");
  }, [navigate]);

  return (
    <a className={styles.login2}>
      <div className={styles.loginChild} />
      <div className={styles.loginItem} />
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
      <button
        className={styles.caixaCadastrarSe1}
        onClick={onCaixaCadastrarSeClick}
      >
        <i className={styles.cadastreSe}>Cadastre-se</i>
        <i className={styles.i1}>_______________</i>
      </button>
      <div className={styles.caixaLogin}>
        <h2 className={styles.login3}>Login</h2>
        <img className={styles.caixaLoginChild} alt="" src="/undefined2.png" />
      </div>
      <div className={styles.caixaBotoEntrar1} onClick={onCaixaBotoEntrarClick}>
        <div className={styles.entrar}>Entrar</div>
      </div>
    </a>
  );
};

export default Login;
