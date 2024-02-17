import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/Logo";
import { DesktopMenu } from "./desktopMenu/DesktopMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper>
          <Logo as="a" href={""}>
            Olesya Shalay
          </Logo>
          <DesktopMenu />
          <MobileMenu />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  line-height: 55px;
  width: 100%;
  position: fixed;
  z-index: 5;
  ${Logo} {
    margin-right: auto;
  }
  border: 1px solid blue;
  background-color: ${theme.colors.colorBg.main};
`;
