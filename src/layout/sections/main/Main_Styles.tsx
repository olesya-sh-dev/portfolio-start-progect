import { styled } from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Details } from "../../../components/Details";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

const Main = styled.section`
  border: 1px solid blue;
  margin-bottom: 140px;
  ${FlexWrapper} {
    @media screen and (max-width: 1230px) {
      gap: 20px;
      justify-content: center;
    }
  }

  @media screen and (max-width: 1050px) {
    margin-bottom: 60px;

    ${FlexWrapper} {
      flex-direction: column;
    }
  }
`;

const Greeting = styled.div`
  max-width: 510px;
  height: 575px;
  padding: 110px 0;

  ${Details} {
    padding-right: 22px;
  }

  @media ${theme.media.tablet} {
    max-width: 560px;
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

const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
`;

const Picture = styled.div`
  width: 50%;

  @media ${theme.media.tablet} {
    width: 720px;
  }
`;
const Photo = styled.img``;

export const S = {
  Main,
  Greeting,
  MainTitle,
  GreetingText,
  Buttons,
  Picture,
  Photo,
};
