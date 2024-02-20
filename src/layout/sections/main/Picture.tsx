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
    height: auto;
  }
  @media ${theme.media.tablet} {
    max-width: 720px;
    /* min-width: 450px;
    width: 417px; */
    object-fit: cover;
    overflow: hidden;
    height: auto;
  }
`;
const Photo = styled.img`
  @media ${theme.media.tablet} {
    max-width: 720px;
    object-fit: cover;
    overflow-y: hidden;
    height: auto;
  }
`;
