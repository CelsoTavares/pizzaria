import * as C from "./styles";

type Props = {
  image: string;
  name: string;
  description: string;
  price: string;
};
const Sabores = ({ image, name, description, price }: Props) => {
  return (
    <C.Sabor>
      <img src={image} />
      <h4>{name}</h4>
      <p>{description}</p>
      <span>{price}</span>
    </C.Sabor>
  );
};

export default Sabores;
