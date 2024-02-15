import React from "react";
import styled from "styled-components";
import photo from "./../../../assets/images/image.webp";
import background from "./../../../assets/images/yellow-bg.png";
import { FlexWrapper } from "../../../components/FlexWrapper";

// export const Picture = () => {
//   return <Photo src={photo} alt="photo" />;
// };

// const Photo = styled.img`
//   object-fit: cover;
//   object-position: center;
//   max-width: 720px;
//   max-height: 630px;
//   width: 50vw;
// `;

export const Picture = () => {
  return (
    <StyledPicture>
      <Photo src={photo} alt="photo" />
    </StyledPicture>
  );
};

const StyledPicture = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const Photo = styled.img`
  object-fit: cover;
  object-position: center;
  max-width: 720px;
  max-height: 630px;
`;
