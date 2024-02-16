import { theme } from "./Theme";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  
  
  *:focus-visible {
    outline-color: red;
  }
  
  body {
    background-color: ${theme.colors.colorBg.main};

    font-family: 'Playfair Display','Comfortaa', 'Roboto', 'Nunito','Raleway',-apple-system, BlinkMacSystemFont,  "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  min-width: 360px;

}



  a {
    text-decoration: none;
    &:hover{
      background-color: ${theme.colors.accent};
      border: 1px solid ${theme.colors.primary}
    }
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
  }
`;
