import React from "react";
import { Menu } from "../menu/Menu";
import { S } from "./../../header/menu/Menu_Styles";

export const DesktopMenu: React.FC = () => {
  return (
    <S.Menu>
      <Menu />
    </S.Menu>
  );
};
