import styled from "styled-components";
import capa from "../../img/capa.jpg";

export const Container = styled.section`
  background-image: url(${capa});
  background-size: left;
  height: calc(100vh - 80px);
  display: flex;
  position: relative;
  @media (max-width: 750px) {
    background-size: cover;
  }
`;

export const Title = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  max-width: 500px;
  height: 200px;
  margin: 200px 50px;
  padding: 10px;
  border-radius: 25px 25px 25px 0;
  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }
  span {
    color: #cc2900;
  }
  h3 {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
    color: rgba(0, 0, 0, 0.7);
  }
  a {
    color: #cc2900;
    background-color: #121212;
    padding: 8px 10px;
    border-radius: 5px;
    box-shadow: 0 0 5px #121212;
    transition: all 0.4s;
  }
  a:hover {
    color: #fff;
    box-shadow: 0 0 15px #121212;
  }
  @media (max-width: 600px) {
    h1 {
      margin-top: 20px;
      font-size: min(36px, 8vw);
    }
    h3 {
      font-size: min(24px, 4vw);
      margin-bottom: 30px;
    }
    a {
      font-size: min(24px, 4vw);
    }
  }
`;
