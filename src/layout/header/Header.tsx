import React from "react";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/Logo";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { S } from "./Header_Styles";
import { Menu } from "./menu/Menu";

export const Header: React.FC = () => {
  //не сработал
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 576;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper>
          <Logo as="a" href={""}>
            Olesya Shalay
          </Logo>

          {width < breakpoint ? <MobileMenu /> : <Menu />}

          {/* <Menu />
          <MobileMenu /> */}
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
