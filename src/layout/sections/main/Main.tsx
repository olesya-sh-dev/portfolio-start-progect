import React from "react";
import styled from "styled-components";

import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Greeting } from "./Greeting";
import { Picture } from "./Picture";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <>
            <Greeting />
            <Picture />
          </>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  overflow: hidden;
  border: 2px solid red;
`;
