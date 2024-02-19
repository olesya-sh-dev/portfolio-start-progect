import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./Contact_Styles";

export const Form: React.FC = () => {
  return (
    <S.Form role="form">
      <FlexWrapper direction="column" gap="24px">
        <S.Field>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" aria-placeholder="Your name" />
        </S.Field>
        <S.Field>
          <label htmlFor="eMail">Email</label>
          <input type="eMail" id="eMail" aria-placeholder="Your eMail" />
        </S.Field>
        <S.Field>
          <legend aria-labelledby="Message">Message</legend>
          <textarea aria-placeholder="Type a message" />
        </S.Field>
      </FlexWrapper>
    </S.Form>
  );
};
