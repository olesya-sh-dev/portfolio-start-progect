import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import styled from "styled-components";
import { Progect } from "./Progect";
import progect1 from "../../../assets/images/progect-1.webp";
import progect2 from "../../../assets/images/progect-2.webp";
import progect3 from "../../../assets/images/progect-3.webp";

///map((element, index)=>({
// <Progect reverse={index%2 === 0 }/>
//}))

export const ProgectS = () => {
  return (
    <ProgectsSection>
      <Container>
        <FlexWrapper direction="column" gap="90px">
          <SectionTitle>Progects</SectionTitle>

          <StyledProgectS>
            {/* //??? width //ширина hardcode*/}

            <FlexWrapper direction="column" gap="80px" width="992px">
              <Progect
                title={"Progect1"}
                text={
                  "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."
                }
                src={progect1}
              />
              <Progect
                title={"Progect2"}
                text={
                  "What was your role, your deliverables, if the project was personal, freelancing."
                }
                src={progect2}
                reverse
              />
              <Progect
                title={"Progect3"}
                text={
                  "You can also add in this description the type of the project, if it was for web, mobile, electron."
                }
                src={progect3}
              />
            </FlexWrapper>
          </StyledProgectS>
        </FlexWrapper>
      </Container>
    </ProgectsSection>
  );
};

const ProgectsSection = styled.section`
  border: 1px solid blue;
  margin-bottom: 140px;
`;

const StyledProgectS = styled.div``;
