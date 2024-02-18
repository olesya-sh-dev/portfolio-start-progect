import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Greeting } from "./Greeting";

import { theme } from "../../../styles/Theme";
import { Picture } from "./Picture";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper
          direction="row-reverse"
          justify="space-between"
          align="center"
          gap="90px"
        >
          <Picture />
          <Greeting />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  border: 1px solid blue;
  margin-bottom: 140px;

  @media screen and (max-width: 1230px) {
    ${FlexWrapper} {
      gap: 20px;
    }
  }

  @media screen and (max-width: 1050px) {
    margin-bottom: 60px;
    ${FlexWrapper} {
      flex-direction: column;
    }
  }

  /* ${Container} {
    @media ${theme.media.tablet} {
      margin-top: 630px;
      margin-bottom: 50px; 
       }
  } */
`;
