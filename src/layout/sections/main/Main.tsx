import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Greeting } from "./Greeting";
import { Picture } from "./Picture";
import { S } from "./Main_Styles";
export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper
          direction="row-reverse"
          justify="space-between"
          align="center"
          gap="90px"
        >
          <Picture />
          <Greeting />
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
