import React from "react";
import { Icon } from "../../components/Icon";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { S } from "./Footer_Styles";

const socialLinksData = [
  {
    href: "#",
    width: "38",
    height: "38",
    iconId: "linkedin",
  },
  {
    href: "#",
    width: "38",
    height: "38",
    iconId: "instagram",
  },
  {
    href: "#",
    width: "42",
    height: "32",
    iconId: "mail",
  },
];
export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper direction="column" gap="35px">
          <S.StyledSocialLinks>
            <FlexWrapper justify="space-between" align="center">
              {socialLinksData.map((s, index) => {
                return (
                  <a href={s.href} key={index}>
                    <Icon iconId={s.iconId} width={s.width} height={s.height} />
                  </a>
                );
              })}
            </FlexWrapper>
          </S.StyledSocialLinks>
          <S.CopyRight>All Rights Reversed 2024</S.CopyRight>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};
