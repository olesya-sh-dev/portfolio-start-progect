import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../styles/Theme";
import { StyledBtn } from "../../../components/Button";
import { Details } from "../../../components/Details";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { font } from "../../../styles/Common";
export const Greeting = () => {
  return (
    <StyledGreeting>
      <FlexWrapper direction="column" align="start" gap="32px">
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
  max-width: 510px;
  height: 575px;
  padding: 110px 0;

  ${Details} {
    padding-right: 22px;
  }
  @media screen and (max-width: 1230px) {
    max-width: 450px;
    padding: 50px 20px;
  }

  @media ${theme.media.tablet} {
    max-width: 510px;
  }
`;

const MainTitle = styled.h1`
  ${font({
    weight: 700,
    color: theme.colors.accent,
  })}
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: -20px;
`;
const GreetingText = styled.p`
  ${font({
    family: "'Roboto', 'sans-serif'",
    weight: 700,
    color: theme.colors.primary,
    Fmin: 40,
    Fmax: 64,
  })}
`;
