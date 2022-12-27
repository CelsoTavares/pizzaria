import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  height: calc(100vh - 80px);
  img {
    width: 50%;
  }
  div {
    padding: 20px;
    width: 100%;
  }
  h2 {
    font-size: 32px;
    margin: 100px 0 30px 0;
    max-width: 500px;
  }
  label {
    color: #8c8c8c;
    margin-bottom: 5px;
    font-size: 14px;
  }
  input {
    outline: none;
    border: none;
    padding: 10px;
    border-bottom: 2px solid #8c8c8c;
    margin-bottom: 10px;
    border-radius: 5px;
    width: 100%;
    max-width: 500px;
  }
  input::placeholder {
    color: #000;
    font-weight: bold;
    font-size: 14px;
  }
  textarea {
    outline: none;
    border: none;
    padding: 10px;
    border-bottom: 2px solid #8c8c8c;
    margin-bottom: 10px;
    border-radius: 5px;
    width: 100%;
    height: 200px;
    max-width: 500px;
    resize: none;
  }
  textarea::placeholder {
    color: #000;
    font-weight: bold;
    font-size: 16px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  button {
    color: #fff;
    background-color: #121212;
    padding: 8px 10px;
    border-radius: 5px;
    box-shadow: 0 0 5px #121212;
    transition: all 0.4s;
    max-width: 150px;
    font-weight: bold;
    cursor: pointer;
  }
  button:hover {
    box-shadow: 0 0 10px #121212;
    color: #cc2900;
  }
`;
