import React from "react";
import { StyledBtn } from "../../../components/Button";
import { styled } from "styled-components";
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Form = () => {
  return (
    <StyledForm>
      <FlexWrapper direction="column" gap="24px">
        <FlexWrapper direction="column" align="flex-start">
          <label htmlFor="name">Email</label>
          <input type="text" id="name"></input>
        </FlexWrapper>

        <FlexWrapper direction="column" align="flex-start">
          <label htmlFor="eMail">Email</label>
          <input type="eMail" id="eMail"></input>
        </FlexWrapper>
        <FlexWrapper direction="column" align="flex-start">
          <legend>Message</legend>
          <textarea></textarea>
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

  label,
  legend {
    height: 30px;
  }
  input {
    height: 40px;
  }
  textarea {
    //?
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

  ${StyledBtn} {
    align-self: flex-end;
  }
`;
