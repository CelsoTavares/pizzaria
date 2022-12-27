import { Link } from "react-router-dom";
import * as C from "./styles";
import { motion } from "framer-motion";
const Inicio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <C.Container>
        <C.Title>
          <h1>
            Super<span>Pizza</span>
          </h1>
          <h3>PIZZA PARA TODOS OS GOSTOS</h3>
          <Link to="/cardapio">COMPRE AGORA</Link>
        </C.Title>
      </C.Container>
    </motion.div>
  );
};

export default Inicio;
