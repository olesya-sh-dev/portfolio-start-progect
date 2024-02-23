import React from "react";

import { theme } from "../styles/Theme";
import { font } from "../styles/Common";
import { animateScroll as scroll } from "react-scroll";
import { styled } from "styled-components";

export const Logo: React.FC = () => {
  return (
    <StyledLogo onClick={() => scroll.scrollToTop()}>
      <a>Olesya Shalay</a>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  display: flex;

  a {
    height: 100%;
  }

  font-size: 18px;
  z-index: 20;
  margin-right: auto;
  ${font({
    family: "'Comfortaa', 'sans-serif'",
    weight: 700,
    color: theme.colors.primary,
  })}
`;
