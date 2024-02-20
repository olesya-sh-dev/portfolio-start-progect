import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { StyledBtn } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Form } from "./Form";
import { S } from "./Contact_Styles";

export const Contact: React.FC = () => {
  return (
    <S.Contact id="contact">
      <Container>
        <FlexWrapper direction="column" gap="24px">
          <SectionTitle>Contact me</SectionTitle>
          <Form />
          <StyledBtn as="a" href={""} submitbtn>
            Send
          </StyledBtn>
        </FlexWrapper>
      </Container>
    </S.Contact>
  );
};
