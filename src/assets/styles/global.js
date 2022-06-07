import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body{
    background-color: ${({ theme }) => theme.background};
    margin: auto;
    text-align: center;
    width: 100%;
    max-width: 600px;
  }
`
