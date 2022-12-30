import * as C from "./styles";

type Props = {
  image: string;
  alt: string;
  name: string;
  description: string;
  price: string;
};
const Sabores = ({ image, alt, name, description, price }: Props) => {
  return (
    <C.Sabor>
      <img src={image} alt={alt} />
      <h4>{name}</h4>
      <p>{description}</p>
      <span>{price}</span>
    </C.Sabor>
  );
};

export default Sabores;
