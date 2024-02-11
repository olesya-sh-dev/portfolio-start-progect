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
  border: 1px solid blue;
  margin-bottom: 55px;
`;
