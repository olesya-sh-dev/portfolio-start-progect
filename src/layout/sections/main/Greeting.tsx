import React from "react";
import { StyledBtn } from "../../../components/Button";
import { Details } from "../../../components/Details";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./Main_Styles";
export const Greeting: React.FC = () => (
  <S.Greeting>
    <FlexWrapper direction="column" align="start" gap="32px">
      <S.MainTitle>web developer</S.MainTitle>
      <S.GreetingText>Hello, my name is Olesya Shalay</S.GreetingText>
      <Details>
        Short text with details about you, what you do or your professional
        career. You can add more information on the about page.
      </Details>
      <S.Buttons>
        <StyledBtn as="a" href={""} primary>
          Progects
        </StyledBtn>
        <StyledBtn as="a" href={""} secondary>
          LinkedIn
        </StyledBtn>
      </S.Buttons>
    </FlexWrapper>
  </S.Greeting>
);
