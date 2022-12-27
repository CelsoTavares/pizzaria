import styled from "styled-components";

export const Sabor = styled.div`
  color: #000;
  width: 300px;
  border-radius: 10px;
  border: 2px solid #b3b3b3;

  img {
    width: 100%;
    height: 200px;
    margin: 0;
    cursor: pointer;
    border-radius: 10px 10px 0 0;
    transition: all 0.4s;
  }
  img:hover {
    opacity: 0.5;
  }
  h4 {
    font-size: 18px;
    margin: 10px;
  }
  p {
    font-size: 14px;
    text-align: left;
    padding: 10px;
  }
  span {
    color: #cc2900;
    font-weight: bold;
    padding: 20px;
  }
`;
