import React from "react";
import { StyledBtn } from "../../../components/Button";
import { styled } from "styled-components";
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Form = () => {
  return (
    <StyledForm>
      <FlexWrapper direction="column">
        <>
          <label htmlFor="name">Name</label>
          <input type="text" id="name"></input>
        </>
        <>
          <label htmlFor="eMail">Email</label>
          <input type="eMail" id="eMail"></input>
        </>
        <>
          <legend>Message</legend>
          <textarea id="fieldMessage"></textarea>
        </>

        <StyledBtn send>Send</StyledBtn>
      </FlexWrapper>
    </StyledForm>
  );
};
//как сделать отступы не между каждым элементом, между группами?

const StyledForm = styled.form`
  ${FlexWrapper} {
    margin-bottom: 56px;
    gap: 24px;
  }
  color: ${theme.colors.primary};
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-weight: 600;
  width: 400px;

  label,
  legend {
    text-align: left;
    height: 30px;
  }

  input {
    border: 1px solid ${theme.colors.colorBg.inputBorder};
    border-radius: 8px;

    height: 40px;
    padding: 8px;
    background: ${theme.colors.colorBg.progectsBg};
  }
  textarea {
    border: 1px solid ${theme.colors.colorBg.inputBorder};
    border-radius: 8px;
    height: 160px;
    padding: 8px;
    background: ${theme.colors.colorBg.progectsBg};
    resize: none;
  }

  ${StyledBtn} {
    align-self: flex-end;
  }
`;
