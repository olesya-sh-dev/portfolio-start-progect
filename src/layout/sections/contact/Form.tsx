import React from "react";
import { StyledBtn } from "../../../components/Button";
import { styled } from "styled-components";
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Field } from "./Field";

export const Form = () => {
  return (
    <StyledForm role="form">
      <FlexWrapper direction="column" gap="24px">
        {/* Вынести в отдельный компонент */}
        <FlexWrapper direction="column" align="flex-start">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" aria-placeholder="Your name" />
        </FlexWrapper>

        <FlexWrapper direction="column" align="flex-start">
          <label htmlFor="eMail">Email</label>
          <Field type="eMail" id="eMail" aria-placeholder="Your eMail" />
        </FlexWrapper>

        <FlexWrapper direction="column" align="flex-start">
          <legend aria-labelledby="Message">Message</legend>
          <Field as="textarea" aria-placeholder="Type a message" />
        </FlexWrapper>

        <StyledBtn as="a" href={""} send>
          Send
        </StyledBtn>
      </FlexWrapper>
    </StyledForm>
  );
};
const StyledForm = styled.form`
  color: ${theme.colors.primary};
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-weight: 600;
  max-width: 400px;
  width: 100%;

  //??
  label,
  legend {
    height: 30px;
  }

  textarea {
    height: 160px;
    resize: none;
  }

  ${StyledBtn} {
    align-self: flex-end;
  }
`;
