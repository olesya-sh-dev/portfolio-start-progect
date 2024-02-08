import React from "react";
import styled from "styled-components";
import photo from "./../../../assets/images/main-photo.webp";
import background from "./../../../assets/images/yellow-bg.png";
export const Picture = () => {
  return (
    <StyledPicture>
      <Photo src={photo} alt="photo" />
    </StyledPicture>
  );
};

const StyledPicture = styled.div`
  border: 2px solid red;
  position: relative;
  width: 50%;

  &::before {
    content: "";
    background-image: url("${background}");
    position: absolute;
    background-repeat: no-repeat;
    transform: translateX(57px);
    transform: translateY(-500);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;
//   position: relative;
//   width: 50%;
//   /* background-image: ${backround};
//   right: -57px;
//   top: -248px; */
// `;
// const Background = styled.img`
//   position: absolute;
// `;

const Photo = styled.img``;
