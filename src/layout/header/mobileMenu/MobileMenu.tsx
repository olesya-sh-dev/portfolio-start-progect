import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";
import { Icon } from "../../../components/Icon";

export const MobileMenu = () => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={true}>
        <Icon iconId={"menu"} width="50" height="50" />
      </BurgerButton>
      <MobileMenuPopup isOpen={true}>
        <MenuItemList>
          <MenuItem as="a" href="">
            About
          </MenuItem>
          <MenuItem as="a" href="">
            Progects
          </MenuItem>
          <MenuItem as="a" href="">
            Contacts
          </MenuItem>
        </MenuItemList>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  height: 50%;
  display: none;
  @media ${theme.media.mobile} {
    display: block;
  }
`;
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: absolute;
  top: 20px;
  right: 20px;
  color: ${theme.colors.primary};
  z-index: 20;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: block;
      position: fixed;
    `}
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  background-color: ${theme.colors.colorBg.main};
  display: none;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.accent};
  height: 50%;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      color: ${theme.colors.accent};
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

const MenuItemList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 50%;
`;

const MenuItem = styled.li`
  color: ${theme.colors.primary};
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  font-weight: 500;
`;
