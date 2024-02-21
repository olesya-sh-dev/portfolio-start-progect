import React, { useState, useEffect } from "react";
import { Icon } from "../Icon";
import { animateScroll as scroll } from "react-scroll";
import { S } from "./GoTopBtn_Styles";

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
        <S.GoTopBtn
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <Icon iconId="gotop" height="20" width="20" />
        </S.GoTopBtn>
      )}
      ;
    </>
  );
};
