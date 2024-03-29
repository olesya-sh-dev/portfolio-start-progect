import React from "react";
import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/Logo";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { S } from "./Header_Styles";
import { Menu } from "./menu/Menu";

export const Header: React.FC = () => {
  //не сработал
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 576;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper>
          <Logo />
          {width < breakpoint ? <MobileMenu /> : <Menu />}
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
