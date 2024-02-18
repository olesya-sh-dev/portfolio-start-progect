import { styled } from "styled-components";
import { Logo } from "../../components/Logo";
import { theme } from "../../styles/Theme";

const Header = styled.header`
  line-height: 55px;
  width: 100%;
  position: fixed;
  z-index: 5;
  ${Logo} {
    margin-right: auto;
  }
  border: 1px solid blue;
  background-color: ${theme.colors.colorBg.main};
`;

export const S = {
  Header,
};
