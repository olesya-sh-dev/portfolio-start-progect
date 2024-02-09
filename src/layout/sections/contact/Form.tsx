import React from "react";
import { StyledBtn } from "../../../components/Button";
import { styled } from "styled-components";
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Form = () => {
  return (
    <StyledForm>
      {/* //ширина hardcode */}
      <FlexWrapper direction="column" width="400px" gap="24px">
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

  label,
  legend {
    height: 30px;
  }

  input {
    border: 1px solid ${theme.colors.colorBg.inputBorder};
    border-radius: 8px;
    width: 100%;
    height: 40px;
    padding: 8px;
    background: ${theme.colors.colorBg.progectsBg};
  }
  textarea {
    border: 1px solid ${theme.colors.colorBg.inputBorder};
    border-radius: 8px;
    width: 100%;
    height: 160px;
    padding: 8px;
    background: ${theme.colors.colorBg.progectsBg};
    resize: none;
  }

  ${StyledBtn} {
    align-self: flex-end;
  }
`;
