import Sabores from "../../components/Sabores";
import * as C from "./style";
import americana from "../../img/p1.jpg";
import calabresa1 from "../../img/p2.jpg";
import atum from "../../img/p3.jpg";
import baiana from "../../img/p4.jpg";
import canadense from "../../img/p5.jpg";
import calabresa2 from "../../img/p6.jpg";
import Carousel from "../../components/Carousel";
import { motion } from "framer-motion";

const Cardapio = () => {
  return (
    <motion.div
      initial={{ x: -1200 }}
      animate={{ x: 0 }}
      exit={{ x: 1200, transition: { duration: 0.2 } }}
    >
      <C.Container>
        <Carousel />
        <h2>Cardápio</h2>
        <div>
          <Sabores
            name="Americana"
            alt="Pizza Americana"
            description="molho de tomate, presunto, milho, ervilha, mussarela, orégano e azeitonas"
            image={americana}
            price="R$44,90"
          />
          <Sabores
            name="Calabresa Especial"
            alt="Pizza Calabresa Especial"
            description=" molho de tomate, calabresa, Catupiry, cebola e orégano."
            image={calabresa1}
            price="R$ 44,90"
          />
          <Sabores
            name="Atum"
            alt="Pizza Atum"
            description="molho de tomate, mussarela, atum deliciosamente temperado, cebola, azeitonas e orégano."
            image={atum}
            price="R$ 47,90"
          />
          <Sabores
            name="Baiana"
            alt="Pizza Baiana"
            description="molho de tomate, mussarela, calabresa artesanal moída, cebola Julienne, pimenta calabresa, molho hot especial, azeitonas e orégano"
            image={baiana}
            price="R$ 45,90"
          />
          <Sabores
            name="Canadense"
            alt="Pizza Canadense"
            description="molho de tomate, mussarela, lombo canadense defumado, Catupiry®, azeitonas e orégano."
            image={canadense}
            price="R$ 45,90"
          />
          <Sabores
            name="Calabresa Paulista"
            alt="Pizza Calabresa Paulista"
            description="molho de tomate, mussarela, calabresa, cebola e orégano."
            image={calabresa2}
            price="R$ 44,90"
          />
        </div>
      </C.Container>
    </motion.div>
  );
};

export default Cardapio;
