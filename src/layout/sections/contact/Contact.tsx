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
        <FlexWrapper direction="column" gap="24px">
          <SectionTitle>Contact me</SectionTitle>
          <Form />
          <StyledBtn as="a" href={""} submitBtn>
            Send
          </StyledBtn>
        </FlexWrapper>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  border: 1px solid blue;
  max-width: 430px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 55px;

  ${SectionTitle} {
    margin-bottom: 65px;
  }

  ${StyledBtn} {
    align-self: flex-end;
  }

  @media ${theme.media.tablet} {
    margin-bottom: 30px;
    ${SectionTitle} {
      margin-bottom: 20px;
    }
    ${FlexWrapper} {
      gap: 15px;
    }
  }
`;
