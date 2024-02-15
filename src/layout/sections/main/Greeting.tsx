import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../styles/Theme";
import { StyledBtn } from "../../../components/Button";
import { Details } from "../../../components/Details";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Greeting = () => {
  return (
    <StyledGreeting>
      <FlexWrapper direction="column" align="start">
        <MainTitle>web developer</MainTitle>
        <GreetingText>Hello, my name is Olesya Shalay</GreetingText>
        <Details>
          Short text with details about you, what you do or your professional
          career. You can add more information on the about page.
        </Details>
        <FlexWrapper justify="flex-start" gap="12px">
          <StyledBtn as="a" href={""} primary>
            Progects
          </StyledBtn>
          <StyledBtn as="a" href={""} secondary>
            LinkedIn
          </StyledBtn>
        </FlexWrapper>
      </FlexWrapper>
    </StyledGreeting>
  );
};

const StyledGreeting = styled.div`
  width: 50%;
  padding-top: 110px;
  height: 629px;

  ${Details} {
    //в макете справа небольшой отступ
    margin: 30px 20px 30px 0;
  }
  @media ${theme.media.tablet} {
    width: 100%;
    padding-top: 0;
  }
`;

const MainTitle = styled.h1`
  color: ${theme.colors.accent};
  font-family: "Nunito", sans-serif;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 12px;
`;
const GreetingText = styled.p`
  color: ${theme.colors.secondary};
  font-family: "Roboto", sans-serif;
  font-size: 64px;
  font-weight: 700;
`;
