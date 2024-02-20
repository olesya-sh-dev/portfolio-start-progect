import { styled } from "styled-components";
import { theme } from "../styles/Theme";

export const Container = styled.div`
  display: flex;
  max-width: 1230px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  @media ${theme.media.tablet} {
    overflow: hidden;
  }
  border: 1px solid red;
`;
