import React from "react";
import photo from "./../../../assets/images/image.webp";
import { S } from "./Main_Styles";

export const Picture: React.FC = () => {
  return (
    <S.Picture>
      <S.Photo src={photo} alt="photo" />
    </S.Picture>
  );
};
