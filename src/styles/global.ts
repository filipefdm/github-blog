import { createGlobalStyle } from "styled-components";
import firaCode from "../assets/fonts/FiraCode-Regular.woff";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'FiraCode';
    src: url(${firaCode}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

    ::-webkit-scrollbar {
      width: .45rem;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors["base-border"]}
    }
    
    ::-webkit-scrollbar-thumb {
      border-radius: 2rem;
      background: ${({ theme }) => theme.colors["brand-blue"]}
    }
  }

  body {
    background: ${({ theme }) => theme.colors["base-background"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 ${({ theme }) =>
      theme.textSizes["text-text-m"]} 'Nunito', sans-serif;
      line-height: 160%;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`;
