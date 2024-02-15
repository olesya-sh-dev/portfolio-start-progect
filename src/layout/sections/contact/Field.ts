import { styled } from "styled-components";
import { theme } from "../../../styles/Theme";

export const Field = styled.input`
  border: 1px solid ${theme.colors.colorBg.inputBorder};
  border-radius: 8px;
  width: 100%;
  padding: 8px;
  background: ${theme.colors.colorBg.progectsBg};

  //где повесить на все элементы страницы?
  &:focus-visible {
    outline-color: ${theme.colors.accent};
  }
`;
