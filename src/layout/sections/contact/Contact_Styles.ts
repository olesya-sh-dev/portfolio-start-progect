import { styled } from "styled-components";
import { StyledBtn } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

const Contact = styled.section`
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

const Form = styled.form`
  font-size: 16px;
  ${font({ weight: 600, color: theme.colors.primary })}
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
  @media ${theme.media.tablet} {
    margin-top: 30px;
  }
`;
const Field = styled.div`
  width: 100%;
`;

export const S = {
  Contact,
  Form,
  Field,
};
