import * as C from "./style";
import aboutImg from "../../img/sup.jpg";
import { motion } from "framer-motion";

const Sobre = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <C.Container>
        <img src={aboutImg} alt="pizza image" />
        <h1>Sobre Nós</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
          minima et deleniti, quibusdam illum mollitia cum atque quas iusto
          autem perspiciatis alias nemo doloribus aperiam ut dignissimos, dolor
          minus quasi? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Tenetur fuga quasi repellat dicta nemo, voluptate, dolores adipisci
          quidem rerum doloremque nostrum labore nesciunt! At minima ipsum
          distinctio. Eius, distinctio autem? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quos veniam harum, quis assumenda quasi
          ex, iure distinctio quas enim at dolor necessitatibus? Repellat eum,
          nobis molestiae eius deleniti deserunt perspiciatis.
        </div>
      </C.Container>
    </motion.div>
  );
};

export default Sobre;
