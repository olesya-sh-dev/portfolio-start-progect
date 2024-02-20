import { css, styled } from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

const Menu = styled.nav`
  ul {
    display: flex;
    justify-content: flex-end;
    gap: 50px;
    /* @media ${theme.media.mobile} {
      display: none;
    } */
  }
`;

const MenuItem = styled.li`
  font-size: 18px;
  ${font({
    family: "'Raleway', 'sans-serif'",
    weight: 500,
    color: theme.colors.primary,
  })}
`;

// const Menu = styled.nav`
//   @media ${theme.media.mobile} {
//     display: none;
//   }
// `;

const MobileMenu = styled.nav`
  height: 50%;
  /* display: none; */

  /* @media ${theme.media.mobile} {
    display: block;
  } */
`;

const BurgerButton = styled.button`
  position: absolute;
  top: 0;
  right: 20px;
  color: ${theme.colors.primary};
  z-index: 20;
  display: block;
  position: fixed;
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 5;
  display: none;
  background-color: ${theme.colors.accent};
  height: 30%;
  opacity: 0.8;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      color: ${theme.colors.accent};
      display: block;
    `}
  ${Menu} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 20px;
  }
`;

export const S = {
  Menu,
  MenuItem,
  // Menu,
  MobileMenu,
  BurgerButton,
  MobileMenuPopup,
};
