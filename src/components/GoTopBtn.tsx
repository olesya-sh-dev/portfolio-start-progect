import React, { useState, useEffect } from "react";
import { Icon } from "./Icon";
import { animateScroll as scroll } from "react-scroll";
import { styled } from "styled-components";
import { theme } from "../styles/Theme";

export const GoTopBtn: React.FC = () => {
  const [showGoTopBtn, setShowGoTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowGoTopBtn(true);
      } else {
        setShowGoTopBtn(false);
      }
    });
  }, []);

  return (
    <>
      {showGoTopBtn && (
        <StyledGoTopBtn
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <Icon iconId="gotop" height="20" width="20" />
        </StyledGoTopBtn>
      )}
      ;
    </>
  );
};

const StyledGoTopBtn = styled.div`
  background-color: ${theme.colors.accent};
  border-radius: 50%;
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    transform: translate(-2px, -2px);
  }
`;
