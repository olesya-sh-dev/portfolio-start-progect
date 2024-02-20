import React from "react";
import { S } from "./Menu_Styles";

export const Menu: React.FC = () => {
  return (
    <S.Menu>
      <S.MenuItem as="a" href="">
        About
      </S.MenuItem>
      <S.MenuItem as="a" href="">
        Progects
      </S.MenuItem>
      <S.MenuItem as="a" href="">
        Contacts
      </S.MenuItem>
    </S.Menu>
  );
};
