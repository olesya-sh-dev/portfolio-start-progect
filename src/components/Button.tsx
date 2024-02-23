import { css, styled } from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";
type StyledBtnPropsType = {
  primary?: boolean;
  secondary?: boolean;
  vewprogect?: boolean;
  submitbtn?: boolean;
};

export const StyledBtn = styled.button<StyledBtnPropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 43px;
  font-size: 18px;
  ${font({
    family: "'Roboto', 'sans-serif'",
    weight: 500,
    color: theme.colors.primary,
  })}
  border-radius: 8px;

  ${(props) =>
    props.primary &&
    css<StyledBtnPropsType>`
      background: ${theme.colors.accent};
      width: 115px;
    `};

  ${(props) =>
    props.secondary &&
    css<StyledBtnPropsType>`
      border: 2px solid ${theme.colors.primary};
      width: 117px;
    `};

  ${(props) =>
    props.vewprogect &&
    css<StyledBtnPropsType>`
      border: 1px solid ${theme.colors.primary};
      width: 150px;
      border-radius: 24px;
      white-space: nowrap;
    `};

  ${(props) =>
    props.submitbtn &&
    css<StyledBtnPropsType>`
      width: 90px;
      background: ${theme.colors.accent};
    `}
`;
