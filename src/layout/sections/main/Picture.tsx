import React from "react";
import styled from "styled-components";
import photo from "./../../../assets/images/image.webp";
import { theme } from "../../../styles/Theme";

export const Picture = () => {
  return (
    <StyledPicture>
      <Photo src={photo} alt="photo" />
    </StyledPicture>
  );
};

const StyledPicture = styled.div`
  width: 50%;

  @media screen and (max-width: 1230px) {
    width: 720px;
  }
  @media ${theme.media.tablet} {
  }
`;
const Photo = styled.img``;
