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
        <FlexWrapper direction="column">
          <StyledSocialLinks>
            {/* width hard code */}

            <FlexWrapper justify="space-between" align="center">
              <a href="#">
                <Icon iconId={"instagram"} width="40" height="40" />
              </a>
              <a href="#">
                <Icon iconId={"linkedin"} width="40" height="40" />
              </a>
              <a href="#">
                <Icon iconId={"mail"} width="40" height="40" />
              </a>
            </FlexWrapper>
          </StyledSocialLinks>
          <CopyRight>All Rights Reversed 2024</CopyRight>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  /* display: flex;
  align-self: center; */
  border: 1px solid blue;
  position: relative;
  width: 100%;
  //hard code
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

const CopyRight = styled.small`
  margin-top: 35px;
`;
