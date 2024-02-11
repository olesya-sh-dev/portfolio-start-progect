import React from "react";
import { Icon } from "../../components/Icon";
import yellowfooter from "../../assets/images/yellow-footer.png";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper direction="column" gap="35px">
          <StyledSocialLinks>
            <FlexWrapper justify="space-between" align="center">
              <a href="#">
                <Icon iconId={"instagram"} width="38" height="38" />
              </a>
              <a href="#">
                <Icon iconId={"linkedin"} width="38" height="38" />
              </a>
              <a href="#">
                <Icon iconId={"mail"} width="42" height="32" />
              </a>
            </FlexWrapper>
          </StyledSocialLinks>
          <CopyRight>All Rights Reversed 2024</CopyRight>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  border: 1px solid blue;
  position: relative;
  width: 100%;

  //??? max-height: 345px;
  height: 345px;

  &::before {
    content: "";
    background-image: url("${yellowfooter}");
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const StyledSocialLinks = styled.div`
  max-width: 190px;
  width: 100%;
`;

const CopyRight = styled.small``;
