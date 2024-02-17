import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h3`
  ${font({
    family: "'Playfair Display'",
    weight: 700,
    color: theme.colors.primary,
    Fmin: 36,
    Fmax: 48,
  })}

  text-align: center;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 100px;
    height: 4px;
    background-color: ${theme.colors.accent};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
