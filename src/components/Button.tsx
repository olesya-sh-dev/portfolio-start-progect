import React from "react";
import { css, styled } from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";
type StyledBtnPropsType = {
  primary?: boolean;
  secondary?: boolean;
  vewprogect?: boolean;
  submitBtn?: boolean;
};

export const StyledBtn = styled.button<StyledBtnPropsType>`
  height: 43px;
  font-size: 18px;
  ${font({
    family: "'Roboto', 'sans-serif'",
    weight: 500,
    color: theme.colors.primary,
  })}
  border-radius: 8px;
  padding: 8px 24px 8px 24px;

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
    props.submitBtn &&
    css<StyledBtnPropsType>`
      width: 90px;
      background: ${theme.colors.accent};
    `}
`;
