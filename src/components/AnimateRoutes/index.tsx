import { Route, Routes, useLocation } from "react-router-dom";
import Inicio from "../../pages/Inicio";
import Cardapio from "../../pages/Cardapio";
import Sobre from "../../pages/Sobre";
import Contato from "../../pages/Contato";
import NoPage from "../../pages/NoPage";
import { AnimatePresence } from "framer-motion";

const AnimateRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Inicio />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimateRoutes;
