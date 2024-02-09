import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/Logo";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper>
          <Logo as="a" href="">
            Olesya Shalay
          </Logo>
          <StyledMenu>
            {/* //можно так завернуть? */}
            <ul>
              <FlexWrapper justify="flex-end" gap="50px">
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Progects</a>
                </li>
                <li>
                  <a href="">Contacts</a>
                </li>
              </FlexWrapper>
            </ul>
          </StyledMenu>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  line-height: 55px;
  //почему без этого header сужается, если container и wrapper 100%
  width: 100%;
  position: fixed;
  z-index: 5;
  ${Logo} {
    margin-right: auto;
  }
  border: 1px solid blue;
`;

const StyledMenu = styled.nav`
  a {
    color: ${theme.colors.primary};
    font-family: "Raleway", sans-serif;
    font-size: 18px;
    font-weight: 500;
  }
`;

//сохраняются 15px с боков
