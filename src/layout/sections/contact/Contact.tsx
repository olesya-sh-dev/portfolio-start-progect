import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import styled from "styled-components";
import { StyledBtn } from "../../../components/Button";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Form } from "./Form";

export const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <FlexWrapper direction="column" gap="90px">
          <SectionTitle>Contact me</SectionTitle>
          <Form />
        </FlexWrapper>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  border: 2px solid red;
  margin-bottom: 55px;
  //400 или 430с паддингами
  /* max-width: 430px; */
`;
