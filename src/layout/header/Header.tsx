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
          <Logo as="a" href={""}>
            Olesya Shalay
          </Logo>
          <StyledMenu role="menu" aria-label="Menu">
            <ul>
              <FlexWrapper justify="flex-end" gap="50px">
                <MenuItem as="a" href="" role="menuitem">
                  About
                </MenuItem>
                <MenuItem as="a" href="" role="menuitem">
                  Progects
                </MenuItem>
                <MenuItem as="a" href="" role="menuitem">
                  Contacts
                </MenuItem>
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

const StyledMenu = styled.nav``;

const MenuItem = styled.li`
  color: ${theme.colors.primary};
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  font-weight: 500;
`;

//сохраняются 15px с боков
