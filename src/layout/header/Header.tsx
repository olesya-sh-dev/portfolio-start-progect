import React from "react";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/Logo";
import { DesktopMenu } from "./desktopMenu/DesktopMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { S } from "./Header_Styles";

export const Header: React.FC = () => {
  return (
    <S.Header>
      <Container>
        <FlexWrapper>
          <Logo as="a" href={""}>
            Olesya Shalay
          </Logo>
          <DesktopMenu />
          <MobileMenu />
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
