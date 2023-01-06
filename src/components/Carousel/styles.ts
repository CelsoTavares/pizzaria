import styled from "styled-components";

export const Container = styled.div`
  height: 500px;
  overflow: hidden;
  box-shadow: 1px -1px 15px #000;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    transition: all 0.4s;
  }
  svg {
    color: #fff;
    border-radius: 20px;
    background-color: #000;
    font-size: 30px;
    position: absolute;
    cursor: pointer;
    z-index: 10;
  }
  .prev svg {
    bottom: 50%;
    left: 5px;
  }
  .next svg {
    bottom: 50%;
    right: 5px;
  }
`;
