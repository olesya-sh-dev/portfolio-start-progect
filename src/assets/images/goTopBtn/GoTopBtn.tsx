import React, { useState, useEffect } from "react";
import { Icon } from "../../../components/Icon";
import { styled } from "styled-components";
import { theme } from "../../../styles/Theme";

import { animateScroll as scroll } from "react-scroll";
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
//кривой box
const StyledGoTopBtn = styled.div`
  background-color: ${theme.colors.accent};
  border-radius: 50%;
  padding: 10px;
  position: fixed;
  bottom: 30px;
  right: 30px;
`;
