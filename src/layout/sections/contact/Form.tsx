import React from "react";

import { styled } from "styled-components";
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Form = () => {
  return (
    <StyledForm role="form">
      <FlexWrapper direction="column" gap="24px">
        <Field>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" aria-placeholder="Your name" />
        </Field>
        <Field>
          <label htmlFor="eMail">Email</label>
          <input type="eMail" id="eMail" aria-placeholder="Your eMail" />
        </Field>
        <Field>
          <legend aria-labelledby="Message">Message</legend>
          <textarea aria-placeholder="Type a message" />
        </Field>
      </FlexWrapper>
    </StyledForm>
  );
};
const StyledForm = styled.form`
  color: ${theme.colors.primary};
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-weight: 600;
  max-width: 430px;
  width: 100%;

  label,
  legend {
    height: 30px;
  }

  textarea {
    height: 160px;
    resize: none;
  }
  input,
  textarea {
    border: 1px solid ${theme.colors.colorBg.inputBorder};
    border-radius: 8px;
    width: 100%;
    padding: 8px;
    background: ${theme.colors.colorBg.progectsBg};
  }
`;

const Field = styled.div`
  width: 100%;
`;
