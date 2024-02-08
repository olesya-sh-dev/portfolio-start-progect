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
          <Logo>Olesya Shalay</Logo>
          <StyledMenu>
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Progects</a>
              </li>
              <li>
                <a href="">Contacts</a>
              </li>
            </ul>
          </StyledMenu>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  height: 55px;
  width: 100%;
  z-index: 5;
  /* background-color: red; */
  ${Logo} {
    margin-right: auto;
  }
  border: 1px solid red;
`;

const StyledMenu = styled.nav`
  ul {
    display: flex;
    justify-content: flex-end;
    gap: 50px;

    a {
      color: ${theme.colors.primary};
      font-family: "Raleway", sans-serif;
      font-size: 18px;
      font-weight: 500;
    }
  }
`;

//сохраняются 15px с боков
