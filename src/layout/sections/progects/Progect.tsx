import React from "react";

import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import { StyledBtn } from "../../../components/Button";
import { theme } from "../../../styles/Theme";

import { Details } from "../../../components/Details";
import { SectionTitle } from "../../../components/SectionTitle";

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

  /* не работает ${FlexWrapper} {
    &:nth-of-type(even) {
      flex-direction: row-reverse;
    }
  } */
`;
const ProgectInfo = styled.div`
  padding-left: 50px;
  padding-right: 40px;
  width: 50%;

  @media ${theme.media.tablet} {
    padding: 20px;
    ${FlexWrapper} {
      gap: 20px;
    }
  }

  @media ${theme.media.mobile} {
    ${FlexWrapper} {
      align-items: center;
    }
    width: 100vw;
    height: 100vw;
    padding: 15px;
  }
`;

const Title = styled(SectionTitle)`
  font-size: 40px;
  &::before {
    display: none;
  }
`;
const Text = styled(Details)`
  font-size: 18px;
`;

const Image = styled.img`
  width: 50%;
  @media ${theme.media.mobile} {
    width: 100%;
  }
`;
