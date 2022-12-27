import { Link } from "react-router-dom";
import * as C from "./styles";

const Inicio = () => {
  return (
    <C.Container>
      <C.Title>
        <h1>
          Super <span>Pizza</span>
        </h1>
        <h3>PIZZA PARA TODOS OS GOSTOS</h3>
        <Link to="/cardapio">COMPRE AGORA</Link>
      </C.Title>
    </C.Container>
  );
};

export default Inicio;
