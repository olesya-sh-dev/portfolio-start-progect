import { styled } from "styled-components";
import { theme } from "../../styles/Theme";

//кривой box
const GoTopBtn = styled.div`
  background-color: ${theme.colors.accent};
  border-radius: 50%;
  padding: 10px;
  position: fixed;
  bottom: 30px;
  right: 30px;
`;

export const S = {
  GoTopBtn,
};
