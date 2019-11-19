import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.font.family};
    font-weight: 300;
    font-style: normal;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.dark};
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  input, textarea, select, button {
    font-family: ${({ theme }) => theme.font.family};
  }

  input {
    font-family: ${({ theme }) => theme.font.family};
  }

  h1, h2 {
    font-family: ${({ theme }) => theme.font.scriptFamily};
  }
`;

export default GlobalStyle;
