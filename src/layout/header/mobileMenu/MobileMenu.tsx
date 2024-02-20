import React from "react";
import { Menu } from "../menu/Menu";
import { S } from "../menu/Menu_Styles";
import { Icon } from "../../../components/Icon";

export const MobileMenu: React.FC = () => {
  return (
    <S.MobileMenu>
      <S.BurgerButton>
        <Icon iconId={"menu"} width="50" height="50" />
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={true}>
        <Menu />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
