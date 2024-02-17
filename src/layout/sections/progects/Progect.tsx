import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import { StyledBtn } from "../../../components/Button";
import { theme } from "../../../styles/Theme";
import { Details } from "../../../components/Details";
import { SectionTitle } from "../../../components/SectionTitle";
import { font } from "../../../styles/Common";
type ProgectPropsType = {
  title: string;
  text: string;
  src: string;
  reverse?: boolean;
};

export const Progect = (props: ProgectPropsType) => {
  return (
    <StyledProgect>
      <FlexWrapper direction={props.reverse ? "row-reverse" : "row"}>
        <ProgectInfo>
          <FlexWrapper direction="column" align="start" gap="24px">
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <StyledBtn as="a" href={""} vewprogect>
              View Progect
            </StyledBtn>
          </FlexWrapper>
        </ProgectInfo>

        <Image src={props.src} alt="progect" />
      </FlexWrapper>
    </StyledProgect>
  );
};

const StyledProgect = styled.div`
  border: 1px solid red;
  border-radius: 25px;
  overflow: hidden;
  background-color: ${theme.colors.colorBg.progectsBg};

  ${FlexWrapper} {
    @media ${theme.media.mobile} {
      flex-direction: column;
      //ProgectInfo центрирование по вертикали
      height: 100%;
    }
  }

  /* &:nth-of-type(even) {
    ${FlexWrapper} {
      flex-direction: row-reverse;
    }
  } */
`;
const ProgectInfo = styled.div`
  padding-left: 50px;
  padding-right: 40px;
  width: 50%;

  @media ${theme.media.mobile} {
    ${FlexWrapper} {
      align-items: center;
    }
    padding-left: 30px;
    padding-right: 30px;
    width: 100vw;
    height: 100vw;
  }
`;

const Title = styled(SectionTitle)`
  //как перезатереть только макс и мин значения?
  ${font({
    family: "'Playfair Display', 'sans-serif'",
    weight: 700,
    color: theme.colors.primary,
    Fmin: 24,
    Fmax: 40,
  })}

  &::before {
    display: none;
  }
`;
const Text = styled(Details)`
  ${font({
    Fmax: 18,
    Fmin: 16,
  })}
`;

const Image = styled.img`
  width: 50%;
  @media ${theme.media.mobile} {
    width: 100%;
  }
`;
