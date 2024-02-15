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
        <Greeting />
      </Container>
      <Picture />
    </StyledMain>
  );
};

const StyledMain = styled.section`
  overflow: hidden;
  border: 1px solid blue;
  margin-bottom: 140px;
`;
