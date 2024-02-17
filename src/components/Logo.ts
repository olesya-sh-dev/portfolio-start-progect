import { styled } from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const Logo = styled.span`
  font-size: 18px;
  ${font({
    family: "'Comfortaa', 'sans-serif'",
    weight: 700,
    color: theme.colors.primary,
  })}
`;
