import { styled } from "styled-components";
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Details } from "../../../components/Details";
import { font } from "../../../styles/Common";
import { Container } from "../../../components/Container";

const Progects = styled.section`
  border: 1px solid blue;
  margin-bottom: 140px;

  @media ${theme.media.tablet} {
    margin-bottom: 60px;
  }

  ${Container} {
    & > ${FlexWrapper} {
      @media ${theme.media.tablet} {
        gap: 45px;
      }
    }
  }
`;
const ProgectItems = styled.div`
  max-width: 992px;
  width: 100%;

  & > ${FlexWrapper} {
    @media ${theme.media.tablet} {
      gap: 30px;
    }
  }
`;

const Progect = styled.div`
  border: 1px solid red;
  border-radius: 25px;
  overflow: hidden;
  background-color: ${theme.colors.colorBg.progectsBg};

  ${FlexWrapper} {
    @media ${theme.media.mobile} {
      flex-direction: column;
      //ProgectInfo центрирование по вертикали
      height: 100%;
    }
  }

  /* &:nth-of-type(even) {
    ${FlexWrapper} {
      flex-direction: row-reverse;
    }
  } */
`;
const ProgectInfo = styled.div`
  padding-left: 50px;
  padding-right: 40px;
  width: 50%;

  @media ${theme.media.mobile} {
    ${FlexWrapper} {
      align-items: center;
    }
    padding-left: 30px;
    padding-right: 30px;
    width: 100vw;
    height: 100vw;
  }
`;

const Title = styled(SectionTitle)`
  ${font({
    family: "'Playfair Display', 'sans-serif'",
    weight: 700,
    color: theme.colors.primary,
    Fmin: 24,
    Fmax: 40,
  })}

  &::before {
    display: none;
  }
`;
const Text = styled(Details)`
  ${font({
    Fmax: 18,
    Fmin: 16,
  })}
`;

const Image = styled.img`
  width: 50%;
  @media ${theme.media.mobile} {
    width: 100%;
  }
`;

export const S = {
  Progects,
  ProgectItems,
  Progect,
  ProgectInfo,
  Title,
  Text,
  Image,
};
