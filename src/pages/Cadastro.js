import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Cadastro.module.css";
const Cadastro = () => {
  const navigate = useNavigate();

  const onCaixaBotoVoltarClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onCaixaBotoPrximoClick = useCallback(() => {
    navigate("/pgina-inicial");
  }, [navigate]);

  return (
    <div className={styles.cadastro}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.caixaInformaes}>
          <i className={styles.informaesGerais1}>Informações Gerais :</i>
          <img className={styles.barra1Icon} alt="" src="/undefined3.png" />
        </div>
        <div className={styles.caixaDeNome1}>
          <input className={styles.inNome1} type="text" />
          <div className={styles.nome}>
            <i className={styles.nome1}>Nome</i>
            <i className={styles.i}>:</i>
          </div>
        </div>
        <div className={styles.caixaDataNascimento1}>
          <i className={styles.dataDeNascimento1}>{`Data de Nascimento : `}</i>
          <input className={styles.inAno1} type="text" />
          <input className={styles.inMs1} type="text" />
          <input className={styles.inDia1} type="text" />
        </div>
        <div className={styles.caixaCidade}>
          <i className={styles.cidade}>Cidade:</i>
          <input className={styles.inCidade1} type="text" />
        </div>
        <div className={styles.caixaLocalizao}>
          <i className={styles.localizao}>{`Localização: `}</i>
          <div className={styles.barra21} />
        </div>
        <div className={styles.caixaEndereo}>
          <i className={styles.endereo}>Endereço:</i>
          <input className={styles.inEndereo1} type="text" />
        </div>
        <div className={styles.caixaN}>
          <i className={styles.n}>N°</i>
          <input className={styles.inN1} type="text" />
        </div>
      </div>
      <div className={styles.cadastroChild} />
      <div className={styles.barra31} />
      <div className={styles.caixaCep}>
        <i className={styles.endereo}>CEP:</i>
        <input className={styles.inCep} type="text" />
      </div>
      <div className={styles.caixaDeCpf}>
        <input className={styles.inCpf} type="text" />
        <i className={styles.cpf}>
          <span>CPF</span>
          <span className={styles.span}>:</span>
        </i>
      </div>
      <div className={styles.caixaRg}>
        <i className={styles.rg}>RG:</i>
        <input className={styles.inRg} type="text" />
      </div>
      <div className={styles.caixaEstado}>
        <i className={styles.estado}>Estado :</i>
        <input className={styles.inEstado1} type="text" />
      </div>
      <div className={styles.caixaSexo}>
        <i className={styles.cpf}>Sexo :</i>
        <button className={styles.botoMasc1} />
        <i className={styles.masculino}>{`Masculino `}</i>
        <button className={styles.botoFemi1} />
        <i className={styles.feminino}>Feminino</i>
      </div>
      <div className={styles.caixaTelefone}>
        <i className={styles.cpf}>Telefone:</i>
        <input className={styles.inTelefone1} type="text" />
      </div>
      <div className={styles.caixaEmail}>
        <i className={styles.estado}>Email:</i>
        <input className={styles.inEmail1} type="text" />
      </div>
      <button
        className={styles.caixaBotoVoltar1}
        onClick={onCaixaBotoVoltarClick}
      >
        <div className={styles.botoVoltar1} />
        <div className={styles.voltar}>{`Voltar `}</div>
      </button>
      <button
        className={styles.caixaBotoPrximo1}
        onClick={onCaixaBotoPrximoClick}
      >
        <div className={styles.botoVoltar1} />
        <div className={styles.prximo}>Próximo</div>
      </button>
    </div>
  );
};

export default Cadastro;
