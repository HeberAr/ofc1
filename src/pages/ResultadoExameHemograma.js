import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ResultadoExameHemograma.module.css";
const ResultadoExameHemograma = () => {
  const navigate = useNavigate();

  const onIconClick = useCallback(() => {
    navigate("/pgina-inicial");
  }, [navigate]);

  return (
    <div className={styles.resultadoExameHemograma1}>
      <div className={styles.intro}>
        <img className={styles.introChild} alt="" src="/undefined12.png" />
        <i
          className={styles.protocoloDeResultados1}
        >{`Protocolo de Resultados Laboratorial `}</i>
        <img
          className={styles.icon1}
          alt=""
          src="/undefined1.png"
          onClick={onIconClick}
        />
      </div>
      <div className={styles.valresObtidos}>
        <b className={styles.valoresObtidos}>Valores Obtidos</b>
        <div className={styles.milhesmm}>milhões/mm³</div>
        <div className={styles.g}>g%</div>
        <div className={styles.div}>%</div>
      </div>
      <div className={styles.referencia}>
        <b className={styles.valoresObtidos}>Valores Refencia</b>
        <div className={styles.milhesmm1}>milhões/mm³</div>
        <div className={styles.g1}>g%</div>
        <div className={styles.div1}>%</div>
      </div>
      <div className={styles.valoresLeuObt1}>
        <b className={styles.valoresObtidos}>Valores Obtidos</b>
        <div className={styles.mm}>/mm³</div>
        <div className={styles.g}>%</div>
        <div className={styles.div3}>%</div>
        <div className={styles.div}>%</div>
      </div>
      <div className={styles.refernciaLeu}>
        <b className={styles.valoresObtidos}>Valores Refencia</b>
        <div className={styles.mm1}>/mm³</div>
        <div className={styles.g1}>g%</div>
        <div className={styles.div1}>%</div>
      </div>
      <div className={styles.valresEritrograma}>
        <b className={styles.valoresObtidos}>Eritrograma</b>
        <div className={styles.eritrcitos}>{`Eritrócitos `}</div>
        <div className={styles.hemoglobina}>Hemoglobina</div>
        <div className={styles.hemmatcrito}>Hemmatócrito</div>
        <div className={styles.observaes}>{`Observações : `}</div>
      </div>
      <div className={styles.leucograma}>
        <b className={styles.valoresObtidos}>{`Leucograma `}</b>
        <div className={styles.eritrcitos}>Leucócitos</div>
        <div className={styles.hemoglobina}>Eosinófilos</div>
        <div className={styles.hemmatcrito}>Linfócitos</div>
        <div className={styles.observaes1}>Observações :</div>
        <div className={styles.observaes}>Monócitos</div>
      </div>
      <div className={styles.valresPlaq}>
        <b className={styles.valoresObtidos}>Valores Obtidos</b>
        <div className={styles.mm}>/mm³</div>
      </div>
      <div className={styles.refPlaq}>
        <b className={styles.valoresObtidos}>Valores Refencia</b>
        <div className={styles.mm3}>/mm³</div>
      </div>
      <div className={styles.plaquetas}>
        <b className={styles.valoresObtidos}>{`Plaquetas `}</b>
        <div className={styles.eritrcitos}>{`Plaquetas `}</div>
        <div className={styles.hemoglobina}>{`Observações `}</div>
      </div>
      <div className={styles.exame}>
        <div
          className={styles.hemogramaCompleto1}
        >{`Hemograma Completo : `}</div>
        <div className={styles.div6}>________________________</div>
      </div>
      <div className={styles.informaes}>
        <i className={styles.paciente}>{`Paciente: `}</i>
        <i className={styles.emisso}>{`Emissão: `}</i>
        <i className={styles.sexo}>{`Sexo: `}</i>
        <i className={styles.rg}>{`RG: `}</i>
        <i className={styles.cpf}>CPF:</i>
        <i className={styles.nascimento}>Nascimento:</i>
      </div>
      <img
        className={styles.resultadoExameHemogramaChild}
        alt=""
        src="/undefined13.png"
      />
      <img
        className={styles.resultadoExameHemogramaItem}
        alt=""
        src="/undefined13.png"
      />
    </div>
  );
};

export default ResultadoExameHemograma;
