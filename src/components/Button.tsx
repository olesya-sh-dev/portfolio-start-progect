import React from "react";
import { css, styled } from "styled-components";
import { theme } from "../styles/Theme";

type StyledBtnPropsType = {
  primary?: boolean;
  secondary?: boolean;
  vewprogect?: boolean;
  send?: boolean;
};

export const StyledBtn = styled.button<StyledBtnPropsType>`
  height: 43px;
  color: ${theme.colors.primary};
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 500;
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

      margin-left: 12px;
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
    props.send &&
    css<StyledBtnPropsType>`
      width: 90px;
      background: ${theme.colors.accent};
    `}
`;
