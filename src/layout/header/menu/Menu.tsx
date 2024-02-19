import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

export const Menu: React.FC = () => {
  return (
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
  );
};

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
