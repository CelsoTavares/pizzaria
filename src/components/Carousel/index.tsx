import * as C from "./styles";
import { useEffect, useState } from "react";
import pizza1 from "../../img/p3.jpg";
import pizza2 from "../../img/p4.jpg";
import pizza3 from "../../img/p5.jpg";

const Carousel = () => {
  const pizzas = [pizza1, pizza2, pizza3];
  const [image, setImage] = useState(pizzas[0]);

  useEffect(() => {
    setTimeout(() => {
      if (image == pizzas[0]) {
        setImage(pizzas[1]);
      } else if (image == pizzas[1]) {
        setImage(pizzas[2]);
      } else {
        setImage(pizzas[0]);
      }
    }, 4000);
  }, [image]);

  return (
    <C.Container>
      <img src={image} alt="Mais pedidas" />;
    </C.Container>
  );
};

export default Carousel;
