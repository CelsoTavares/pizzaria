import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  padding: 30px;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
  position: relative;
  height: 80px;

  .pizza {
    font-size: 22px;
    color: #cc2900;
  }
  .hamburger {
    display: none;
    color: #cc2900;
    border-top: 2px solid;
    width: 20px;
    height: 20px;
    z-index: 9;
    cursor: pointer;
  }
  .hamburger::after,
  .hamburger::before {
    display: block;
    content: "";
    width: 20px;
    background: currentColor;
    height: 2px;
    margin-top: 5px;
    transition: 0.3s;
  }

  div {
    display: none;
    z-index: 7;
  }
  @media (max-width: 510px) {
    justify-content: flex-start;
    &.active .hamburger {
      border-top: none;
    }
    &.active .hamburger::after {
      position: absolute;
      transform: rotate(-135deg);
    }
    &.active .hamburger::before {
      position: absolute;
      transform: rotate(135deg);
    }
    &.active div {
      display: block;
      background-color: rgba(0, 0, 0, 0.5);
      height: 100vh;
      width: 100vw;
      position: absolute;
      top: 0;
      left: 0;
    }
    .pizza {
      display: none;
    }
    .hamburger {
      display: block;
    }
    div {
      display: block;
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  z-index: 8;

  a {
    color: #fff;
    font-size: 16px;
    padding: 5px;
    transition: all 0.5s;
    margin-left: 10px;
    border-radius: 5px;
  }
  a:focus {
    border-bottom: 1px solid #fff;
  }
  a:hover {
    border-bottom: 1px solid #fff;
  }

  @media (max-width: 510px) {
    background: #000;
    flex-direction: column;
    position: absolute;
    width: 50%;
    min-height: 100vh;
    top: 0;
    left: 0;
    padding-top: 100px;
    transition: 0.3s;
    a:hover,
    a:focus {
      border: 0;
    }
    li {
      padding: 20px;
    }
    li:hover {
      border-bottom: 1px solid #fff;
    }
  }
`;
