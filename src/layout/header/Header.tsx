import React from "react";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/Logo";

import { MobileMenu } from "./mobileMenu/MobileMenu";
import { S } from "./Header_Styles";
import { Menu } from "./menu/Menu";

export const Header: React.FC = () => {
  return (
    <S.Header>
      <Container>
        <FlexWrapper>
          <Logo as="a" href={""}>
            Olesya Shalay
          </Logo>
          <Menu />
          <MobileMenu />
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
