import { Link } from "react-router-dom";
import * as C from "./styles";
import { FaPizzaSlice } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [position, setPosition] = useState("-80%");

  const handleClick = () => {
    const nav = document.querySelector(".nav") as HTMLElement;
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");

    if (active) {
      setPosition("0");
    } else {
      setPosition("-80%");
    }
  };
  return (
    <C.Nav className="nav">
      <div></div>
      <span>
        <Link to="/">
          <FaPizzaSlice className="pizza" />
        </Link>
      </span>
      <span className="hamburger" onClick={handleClick}></span>

      <C.Ul style={{ left: position }}>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/cardapio">Cardápio</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </C.Ul>
    </C.Nav>
  );
};

export default Header;
