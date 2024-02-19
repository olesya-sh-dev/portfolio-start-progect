import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledBtn } from "../../../components/Button";
import { S } from "./Progects_Styles";
type ProgectPropsType = {
  title: string;
  text: string;
  src: string;
  reverse?: boolean;
};

export const Progect: React.FC<ProgectPropsType> = (
  props: ProgectPropsType
) => {
  return (
    <S.Progect>
      <FlexWrapper direction={props.reverse ? "row-reverse" : "row"}>
        <S.ProgectInfo>
          <FlexWrapper direction="column" align="start" gap="24px">
            <S.Title>{props.title}</S.Title>
            <S.Text>{props.text}</S.Text>
            <StyledBtn as="a" href={""} vewprogect>
              View Progect
            </StyledBtn>
          </FlexWrapper>
        </S.ProgectInfo>

        <S.Image src={props.src} alt="progect" />
      </FlexWrapper>
    </S.Progect>
  );
};
