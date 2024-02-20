import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/Icon";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./Skill_Styles";

const iconItems = [
  { iconId: "vscode" },
  { iconId: "js" },
  { iconId: "css" },
  { iconId: "html" },
  { iconId: "greensock" },
  { iconId: "redux" },
  { iconId: "akar" },
  { iconId: "git" },
  { iconId: "react" },
  { iconId: "sass" },
  { iconId: "bootstrap" },
  { iconId: "tailwind" },
];

export const Skills: React.FC = () => {
  return (
    <S.Skills>
      <Container>
        <FlexWrapper direction={"column"} gap="75px">
          <SectionTitle>Skills</SectionTitle>
          <S.SkillIcons>
            <FlexWrapper
              justify="center"
              wrap={"wrap"}
              gap="95px"
              rowgap="75px"
            >
              {iconItems.map((icon, index) => {
                return <Icon iconId={icon.iconId} key={index} />;
              })}
            </FlexWrapper>
          </S.SkillIcons>
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
