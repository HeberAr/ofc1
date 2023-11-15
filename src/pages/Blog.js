import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Blog.module.css";
const Blog = () => {
  const navigate = useNavigate();

  const onIconClick = useCallback(() => {
    navigate("/pgina-inicial");
  }, [navigate]);

  return (
    <div className={styles.blog}>
      <img className={styles.barra2Icon} alt="" src="/undefined.png" />
      <i className={styles.blog1}>Blog</i>
      <div className={styles.aImportnciaDosContainer}>
        <p className={styles.aImportnciaDosExamesDeSa}>
          <i className={styles.aJanelaPara}>
            A Importância dos Exames de Sangue: Conheça a Janela para a Saúde
          </i>
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          Seja bem-vindo ao blog do Centro Hospitalar, onde a saúde e o cuidado
          são prioridades máximas. Hoje, vamos adentrar no universo dos exames
          de sangue, uma ferramenta fundamental na prevenção, diagnóstico e
          acompanhamento de inúmeras condições de saúde.
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          O sangue é o meio pelo qual nossos corpos transportam nutrientes,
          oxigênio e eliminam resíduos. Ele oferece pistas valiosas sobre nosso
          estado de saúde e fornece informações cruciais que podem detectar
          problemas de saúde mesmo antes de sintomas se manifestarem. É nesse
          cenário que os exames de sangue se tornam protagonistas, permitindo
          uma compreensão aprofundada do nosso organismo.
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.aImportnciaDosExamesDeSa}>
          <i className={styles.aJanelaPara}>A Janela para a Saúde</i>
        </p>
        <p className={styles.blankLine}>
          <i className={styles.aJanelaPara}>&nbsp;</i>
        </p>
        <p className={styles.blankLine}>
          Esses exames não são apenas números em uma folha, mas representam uma
          janela para entender o que está acontecendo dentro de nós. As análises
          sanguíneas podem revelar uma variedade de informações, desde os níveis
          de açúcar no sangue, funcionamento dos órgãos, presença de infecções,
          desequilíbrios hormonais e muito mais.
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>Prevenção e Diagnóstico Preciso</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          A realização periódica de exames de sangue desempenha um papel crucial
          na prevenção. Muitas condições, como diabetes, disfunções da tireoide,
          anemias e até mesmo certos tipos de câncer, podem ser identificadas em
          estágios iniciais por meio desses exames. Isso possibilita
          intervenções precoces, o que frequentemente resulta em tratamentos
          mais eficazes.
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.aImportnciaDosExamesDeSa}>
          <i className={styles.aJanelaPara}>A Importância do Acompanhamento</i>
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          Além do diagnóstico, os exames de sangue são vitais para o
          acompanhamento de condições crônicas. Eles fornecem um quadro contínuo
          da saúde do paciente, permitindo ajustes em tratamentos e
          monitoramento de progressos.
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.aImportnciaDosExamesDeSa}>
          <i className={styles.aJanelaPara}>
            O Comprometimento do Centro Hospitalar
          </i>
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          No Centro Hospitalar, compreendemos a relevância desses exames na
          jornada pela saúde. Investimos em tecnologia de ponta e contamos com
          uma equipe altamente qualificada para garantir resultados precisos e
          um atendimento humano, preocupado com o bem-estar de cada paciente.
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.aImportnciaDosExamesDeSa}>
          <i className={styles.aJanelaPara}>Conclusão</i>
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          Os exames de sangue são mais do que uma simples análise laboratorial.
          Eles representam uma ferramenta vital na promoção da saúde, prevenção
          e diagnóstico precoce de inúmeras condições. No Centro Hospitalar,
          buscamos não só oferecer serviços, mas proporcionar o conhecimento e a
          compreensão necessários para que cada indivíduo possa cuidar melhor de
          sua saúde.
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          Lembre-se, sua saúde é um tesouro precioso. Invista nela, cuide-se e
          utilize os exames de sangue como aliados nessa jornada pela vida
          saudável.
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          Conte sempre conosco para cuidar de você e de sua família. Estamos
          aqui para promover um futuro mais saudável e pleno para todos.
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>{`Atenciosamente, `}</p>
        <p className={styles.blankLine}>Equipe Centro Hospitalar.</p>
      </div>
      <img
        className={styles.icon1}
        alt=""
        src="/undefined1.png"
        onClick={onIconClick}
      />
    </div>
  );
};

export default Blog;
