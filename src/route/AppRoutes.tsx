import { Route, Routes, BrowserRouter } from "react-router-dom";
import Contato from "../pages/Contato";
import Cardapio from "../pages/Cardapio";
import Sobre from "../pages/Sobre";
import Inicio from "../pages/Inicio";
import NoPage from "../pages/NoPage";
import Header from "../components/Header";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
