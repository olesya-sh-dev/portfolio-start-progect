import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { Progect } from "./Progect";
import progect1 from "../../../assets/images/progect-1.webp";
import progect2 from "../../../assets/images/progect-2.webp";
import progect3 from "../../../assets/images/progect-3.webp";
import { S } from "./Progects_Styles";

const progects = [
  {
    title: "Progect1",
    text: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    src: progect1,
  },
  {
    title: "Progect2",
    text: "What was your role, your deliverables, if the project was personal, freelancing.",
    src: progect2,
  },
  {
    title: "Progect3",
    text: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    src: progect3,
  },
];

export const ProgectS: React.FC = () => {
  return (
    <S.Progects id="progects">
      <Container>
        <FlexWrapper direction="column" gap="90px">
          <SectionTitle>Progects</SectionTitle>
          <S.ProgectItems>
            <FlexWrapper direction="column" gap="80px">
              {progects.map((p, i) => (
                <Progect
                  key={i}
                  title={p.title}
                  text={p.text}
                  src={p.src}
                  reverse={i % 2 === 1}
                />
              ))}
            </FlexWrapper>
          </S.ProgectItems>
        </FlexWrapper>
      </Container>
    </S.Progects>
  );
};
