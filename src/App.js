import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Blog from "./pages/Blog";
import RecuperarLoginAgendamento from "./pages/RecuperarLoginAgendamento";
import LoginAgendamento from "./pages/LoginAgendamento";
import CadastroConsultaAgendamento from "./pages/CadastroConsultaAgendamento";
import Contatos from "./pages/Contatos";
import Exames from "./pages/Exames";
import Mdicos from "./pages/Mdicos";
import Agendamento from "./pages/Agendamento";
import PginaInicial from "./pages/PginaInicial";
import ResultadoExameHemograma from "./pages/ResultadoExameHemograma";
import RecuperarLogin from "./pages/RecuperarLogin";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/recuperar-loginagendamento":
        title = "";
        metaDescription = "";
        break;
      case "/loginagendamento":
        title = "";
        metaDescription = "";
        break;
      case "/cadastroconsultaagendamento":
        title = "";
        metaDescription = "";
        break;
      case "/contatos":
        title = "";
        metaDescription = "";
        break;
      case "/exames":
        title = "";
        metaDescription = "";
        break;
      case "/mdicos":
        title = "";
        metaDescription = "";
        break;
      case "/agendamento":
        title = "";
        metaDescription = "";
        break;
      case "/pgina-inicial":
        title = "";
        metaDescription = "";
        break;
      case "/resultado-exame":
        title = "";
        metaDescription = "";
        break;
      case "/recuperar-login":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/cadastro":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route
        path="/recuperar-loginagendamento"
        element={<RecuperarLoginAgendamento />}
      />
      <Route path="/loginagendamento" element={<LoginAgendamento />} />
      <Route
        path="/cadastroconsultaagendamento"
        element={<CadastroConsultaAgendamento />}
      />
      <Route path="/contatos" element={<Contatos />} />
      <Route path="/exames" element={<Exames />} />
      <Route path="/mdicos" element={<Mdicos />} />
      <Route path="/agendamento" element={<Agendamento />} />
      <Route path="/pgina-inicial" element={<PginaInicial />} />
      <Route path="/resultado-exame" element={<ResultadoExameHemograma />} />
      <Route path="/recuperar-login" element={<RecuperarLogin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}
export default App;
