import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
body{
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  background-color: #f2f2f2;
}
li {
  list-style: none;
}
a{
  text-decoration: none;
}
`;
