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
  
  
  body {
    /* background-color: ${theme.colors.colorBg.main}; */
background-color: beige;

    font-family: 'Playfair Display','Comfortaa', 'Roboto', 'Nunito','Raleway',-apple-system, BlinkMacSystemFont,  "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  
}
  
  a {
    text-decoration: none;
    &:hover{
      background-color: ${theme.colors.accent};
      border: 2px dashed ${theme.colors.primary}
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
