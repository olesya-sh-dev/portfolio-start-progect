import React from "react";
import { S } from "./Menu_Styles";

export const Menu: React.FC = () => {
  return (
    <S.Menu>
      <ul>
        <S.MenuItem as="a" href="#skills">
          Skills
        </S.MenuItem>
        <S.MenuItem as="a" href="#progects">
          Progects
        </S.MenuItem>
        <S.MenuItem as="a" href="#contact">
          Contacts
        </S.MenuItem>
      </ul>
    </S.Menu>
  );
};
