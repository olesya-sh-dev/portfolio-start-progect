import { styled } from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";

const Skills = styled.section`
  border: 1px solid blue;
  margin-bottom: 140px;

  @media ${theme.media.tablet} {
    margin-bottom: 60px;
    ${FlexWrapper} {
      gap: 45px;
    }
  }
`;

const SkillIcons = styled.div`
  ${FlexWrapper} {
    @media ${theme.media.tablet} {
      justify-content: center;
      gap: 40px;
      row-gap: 30px;
    }
  }
`;

export const S = {
  Skills,
  SkillIcons,
};
