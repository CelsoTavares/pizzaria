import * as C from "./styles";
import latImage from "../../img/lat.jpg";
import { useState } from "react";
import { motion } from "framer-motion";

const Contato = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <motion.div
      initial={{ x: -1200 }}
      animate={{ x: 0 }}
      exit={{ x: 1200, transition: { duration: 0.2 } }}
    >
      <C.Container>
        <img src={latImage} alt="side image" />
        <div>
          <h2>Contato</h2>
          <form>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              placeholder="Digite seu nome.."
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />

            <label htmlFor="email">Email</label>
            <input
              placeholder="Digite seu email..."
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
            <label htmlFor="message">Mensagem</label>
            <textarea
              placeholder="Digite sua mensagem..."
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button>Enviar</button>
          </form>
        </div>
      </C.Container>
    </motion.div>
  );
};

export default Contato;
