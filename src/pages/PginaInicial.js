import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PginaInicial.module.css";
const PginaInicial = () => {
  const navigate = useNavigate();

  const onLoginClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onContatosClick = useCallback(() => {
    navigate("/contatos");
  }, [navigate]);

  const onExamesClick = useCallback(() => {
    navigate("/exames");
  }, [navigate]);

  const onBlogClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtMedicosClick = useCallback(() => {
    navigate("/mdicos");
  }, [navigate]);

  const onButtAngendarClick = useCallback(() => {
    navigate("/agendamento");
  }, [navigate]);

  const onButtDownloadClick = useCallback(() => {
    navigate("/resultado-exame");
  }, [navigate]);

  return (
    <div className={styles.pginaInicial}>
      <div className={styles.frame}>
        <img className={styles.barra1Icon} alt="" src="/undefined3.png" />
        <div className={styles.frame1}>
          <div className={styles.menu}>
            <button className={styles.logopgInicial} />
            <button className={styles.login1} onClick={onLoginClick}>
              Login
            </button>
            <button className={styles.login1}>Home</button>
            <button className={styles.login1} onClick={onContatosClick}>
              Contatos
            </button>
            <button className={styles.login1} onClick={onExamesClick}>
              Exames
            </button>
            <button className={styles.login1} onClick={onBlogClick}>
              Blog
            </button>
          </div>
        </div>
      </div>
      <div className={styles.frame2}>
        <div className={styles.frame3}>
          <div className={styles.funcoes}>
            <div className={styles.frame4}>
              <div className={styles.frame5}>
                <button
                  className={styles.buttMedicos1}
                  onClick={onButtMedicosClick}
                >
                  <div className={styles.buttMedicosChild} />
                  <img
                    className={styles.medicosIcon}
                    alt=""
                    src="/undefined8.png"
                  />
                </button>
                <div className={styles.frame6}>
                  <div className={styles.mdicosEspecializados}>
                    Médicos Especializados
                  </div>
                  <i className={styles.nossaEquipeTem1}>
                    Nossa equipe tem como principal motivação o seu bem estar
                  </i>
                </div>
              </div>
            </div>
            <div className={styles.frame7}>
              <div className={styles.frame8}>
                <button
                  className={styles.buttAngendar1}
                  onClick={onButtAngendarClick}
                >
                  <div className={styles.buttMedicosChild} />
                  <img className={styles.icon} alt="" src="/undefined9.png" />
                </button>
                <div className={styles.frame9}>
                  <i
                    className={styles.entreComSeu1}
                  >{`Entre com seu Login ou cadastre-se no site `}</i>
                  <div className={styles.verResultado}>Agende sua Consulta</div>
                </div>
              </div>
              <div className={styles.frame10}>
                <button
                  className={styles.buttAngendar1}
                  onClick={onButtDownloadClick}
                >
                  <div className={styles.buttMedicosChild} />
                  <img className={styles.icon} alt="" src="/undefined10.png" />
                </button>
                <div className={styles.frame11}>
                  <i className={styles.seNoConseguir1}>
                    Se não conseguir acessar o resultado, verifique o prazo de
                    entrega
                  </i>
                  <div className={styles.verResultado}>Ver Resultado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.capaIcon} alt="" src="/undefined11.png" />
      </div>
      <i className={styles.pginaInicial1}>Página Inicial</i>
    </div>
  );
};

export default PginaInicial;
