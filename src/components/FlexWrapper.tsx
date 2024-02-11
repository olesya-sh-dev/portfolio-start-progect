import React from "react";
import { styled } from "styled-components";

type FlexWrapperPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  gap?: string;
  rowgap?: string;
  width?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  border: 1px dashed darkgreen;
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  gap: ${(props) => props.gap || ""};
  width: ${(props) => props.width || "100%"};
  row-gap: ${(props) => props.rowgap || ""};
`;
