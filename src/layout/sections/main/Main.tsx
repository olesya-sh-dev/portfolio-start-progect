import React from "react";
import styled from "styled-components";

import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Greeting } from "./Greeting";
import { Picture } from "./Picture";
import { theme } from "../../../styles/Theme";

// export const Main = () => {
//   return (
//     <StyledMain>
//       <Container>
//         <Greeting />
//         <StyledPictureInBlock>
//           <Picture />
//         </StyledPictureInBlock>
//       </Container>
//       <StyledPicture>
//         <Picture />
//       </StyledPicture>
//     </StyledMain>
//   );
// };

// const StyledPictureInBlock = styled.div`
//   @media screen and (width>=1280px) {
//     display: none;
//   }
// `;
// const StyledPicture = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   @media screen and (width<1280px) {
//     display: none;
//   }
// `;

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <Greeting />
      </Container>
      <Picture />
    </StyledMain>
  );
};

const StyledMain = styled.section`
  /* overflow: hidden; */
  border: 1px solid blue;
  margin-bottom: 140px;

  ${Container} {
    @media ${theme.media.tablet} {
      margin-top: 630px;
    }
  }
`;
