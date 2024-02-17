import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

export const DesktopMenu = () => {
  return (
    <StyledMenu>
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
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  @media ${theme.media.mobile} {
    display: none;
  }
`;

const MenuItemList = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 50px;
`;

const MenuItem = styled.li`
  font-size: 18px;
  ${font({
    family: "'Raleway', 'sans-serif'",
    weight: 500,
    color: theme.colors.primary,
  })}
`;
