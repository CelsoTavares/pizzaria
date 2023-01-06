import * as C from "./styles";
import { useEffect, useState } from "react";
import pizza1 from "../../img/p3.jpg";
import pizza2 from "../../img/p4.jpg";
import pizza3 from "../../img/p5.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const Carousel = () => {
  const pizzas = [pizza1, pizza2, pizza3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const image = pizzas[currentIndex];

  let intervalId: NodeJS.Timeout;
  const lastIndex = pizzas.length - 1;

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? lastIndex : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === lastIndex ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <C.Container>
      <img src={image} alt="Mais pedidas" />
      <button className="prev" onClick={prevSlide}>
        <AiOutlineArrowLeft />
      </button>
      <button className="next" onClick={nextSlide}>
        <AiOutlineArrowRight />
      </button>
    </C.Container>
  );
};

export default Carousel;
