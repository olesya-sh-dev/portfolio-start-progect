import React from "react";
import { css, styled } from "styled-components";
import { theme } from "../styles/Theme";

type StyledBtnPropsType = {
  primary?: boolean;
  secondary?: boolean;
  vewProgect?: boolean;
  send?: boolean;
};

export const StyledBtn = styled.button<StyledBtnPropsType>`
  height: 43px;
  color: ${theme.colors.primary};
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;

  ${(props) =>
    props.primary &&
    css<StyledBtnPropsType>`
      background: ${theme.colors.accent};
      width: 115px;
      border-radius: 8px;
      padding: 8px 24px 8px 24px;
    `};

  ${(props) =>
    props.secondary &&
    css<StyledBtnPropsType>`
      border: 2px solid ${theme.colors.primary};
      width: 117px;
      border-radius: 8px;
      padding: 8px 24px 8px 24px;
      margin-left: 12px;
    `};

  ${(props) =>
    props.vewProgect &&
    css<StyledBtnPropsType>`
      border: 1px solid ${theme.colors.primary};
      width: 150px;
      border-radius: 24px;
      padding: 8px 24px 8px 24px;
      white-space: nowrap;
    `};

  ${(props) =>
    props.send &&
    css<StyledBtnPropsType>`
      width: 90px;
      border-radius: 8px;
      background: ${theme.colors.accent};
      padding: 8px 24px 8px 24px;
    `};
`;
//как подвинуть кнопку при отрисовке, а не здесь
