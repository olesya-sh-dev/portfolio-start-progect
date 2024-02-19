import { styled } from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

import yellowfooter from "../../assets/images/yellow-footer.png";

const Footer = styled.footer`
  border: 1px solid blue;
  background-image: url("${yellowfooter}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 345px;
  width: 100%;

  @media ${theme.media.tablet} {
    min-height: 200px;
    ${FlexWrapper} {
      gap: 20px;
    }
  }
`;

const StyledSocialLinks = styled.div`
  max-width: 190px;
  width: 100%;
`;

const CopyRight = styled.small`
  font-size: 16px;
  ${font}
`;

export const S = {
  Footer,
  StyledSocialLinks,
  CopyRight,
};
