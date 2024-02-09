import React from "react";
import styled from "styled-components";
import photo from "./../../../assets/images/main-photo.webp";
import background from "./../../../assets/images/yellow-bg.png";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Picture = () => {
  return (
    <StyledPicture>
      <FlexWrapper>
        <Photo src={photo} alt="photo" />
      </FlexWrapper>
    </StyledPicture>
  );
};

const StyledPicture = styled.div`
  width: 50%;
  position: relative;

  &::before {
    content: "";
    background-image: url("${background}");
    position: absolute;
    background-repeat: no-repeat;
    background-position: 0px bottom;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    overflow: hidden;
  }
`;

const Photo = styled.img`
  margin-left: auto;
  border-bottom-left-radius: 150%;
  border-bottom-right-radius: 350px;
`;
