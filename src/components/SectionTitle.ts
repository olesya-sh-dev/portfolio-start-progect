import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h3`
  color: ${theme.colors.primary};
  font-family: "Playfair Display", sans-serif;
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 85px;
  position: relative;

  // не сдвигается вправо псевдоэлемент

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
