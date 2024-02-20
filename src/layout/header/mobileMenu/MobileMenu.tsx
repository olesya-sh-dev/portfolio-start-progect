import React from "react";

import { S } from "../menu/Menu_Styles";
import { Icon } from "../../../components/Icon";
import { Menu } from "../menu/Menu";

export const MobileMenu: React.FC = () => {
  return (
    <S.MobileMenu>
      <S.BurgerButton>
        <Icon iconId={"menu"} width="50" height="50" />
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={false}>
        <Menu />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
