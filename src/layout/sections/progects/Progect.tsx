import React from "react";

import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import { StyledBtn } from "../../../components/Button";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
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
          <FlexWrapper
            direction="column"
            align="start"
            width="405px"
            gap="24px"
          >
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>

            <StyledBtn as="a" href={""} vewProgect>
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

  /* //не работает
  {
    &:nth-of-type(even) {
      flex-direction: row-reverse;
    }
  } */
`;
const ProgectInfo = styled.div`
  padding-left: 50px;
  width: 50%;
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

const Link = styled.link``;

const Image = styled.img`
  width: 50%;
`;
