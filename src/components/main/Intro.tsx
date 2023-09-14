import { styled } from 'styled-components';
// components
import { PALLETTE_MAIN } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import {
  BREAKPOINTMOBILE,
  BREAKPOINTTABLET,
  BREAKPOINTDESKTOP,
} from '../../breakpoint';
import IntroSVG from './IntroSVG';
import ArrowButton from '../ArrowButton';

const IntroWrap = styled.div`
  width: 100%;
  margin-top: 8rem;
  display: flex;
  justify-content: center;
  position: relative;
`;
const IntroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem;
  border: 3px solid ${PALLETTE_MAIN.sub_main};
  border-radius: 6rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 45rem;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    width: 90rem;
    margin: 0 5rem;
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 60rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    min-width: 30rem;
    max-width: 30rem;
    border-radius: 3.6rem;
    padding: 4rem;
  }
`;
const TextContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 100%;
    margin-bottom: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;
const TitleBox = styled.div`
  padding-bottom: 5rem;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    padding-bottom: 2rem;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    svg {
      width: 2.88rem;
      height: 2.88rem;
    }
  }
`;
const Title = styled.div`
  ${FONT_STYLE_V1.text.text_100_medium};
  width: max-content;
  &:nth-child(2) {
    padding-left: 2rem;
  }
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    ${FONT_STYLE_V1.text.text_60_medium};
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_30_medium};
  }
`;
const Content = styled.span`
  ${FONT_STYLE_V1.text.text_18_medium};
  letter-spacing: 2px;
  line-height: 1.5;
  padding-left: 5rem;
  padding-top: 2rem;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    padding: 0;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_12_medium};
  }
`;

function Intro() {
  return (
    <IntroWrap>
      <IntroSVG />
      <IntroContainer>
        <TextContainer>
          <TitleBox>
            <Title>for designer;</Title>
            <Title>for developer;</Title>
          </TitleBox>
          <Content>
            폴룹에서 제공하는 재사용 컴포넌트를 사용하여 쉽고 간편하게 적용할 수
            있어 작업을 빠르게 진행할 수 있도록 도와주는 라이브러리 입니다.
            <br />
            <br />
            재사용 컴포먼트뿐만 아니라 폴룹만의 아이콘, 색상으로 웹사이트를 쉽고
            빠르게 제작해보세요.
          </Content>
        </TextContainer>
        <ButtonBox>
          <ArrowButton />
        </ButtonBox>
      </IntroContainer>
    </IntroWrap>
  );
}

export default Intro;
