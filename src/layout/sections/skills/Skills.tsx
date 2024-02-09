import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/Icon";

import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <FlexWrapper direction={"column"} gap="75px">
          <SectionTitle>Skills</SectionTitle>
          <SkillContentSection>
            <FlexWrapper
              justify="space-between"
              wrap={"wrap"}
              gap="95px"
              rowgap="75px"
            >
              <Icon iconId={"vscode"} />
              <Icon iconId={"js"} />
              <Icon iconId={"css"} />
              <Icon iconId={"html"} />
              <Icon iconId={"greensock"} />
              <Icon iconId={"redux"} />
              <Icon iconId={"akar"} />
              <Icon iconId={"git"} />
              <Icon iconId={"react"} />
              <Icon iconId={"sass"} />
              <Icon iconId={"bootstrap"} />
              <Icon iconId={"tailwind"} />
            </FlexWrapper>
          </SkillContentSection>
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  border: 1px solid blue;
  margin-bottom: 140px;
`;

const SkillContentSection = styled.div``;
