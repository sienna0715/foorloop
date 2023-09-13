import { styled } from 'styled-components';
// components
import { PALLETTE_MAIN } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import {
  BREAKPOINTMOBILE,
  BREAKPOINTTABLET,
  BREAKPOINTDESKTOP,
} from '../../breakpoint';
import ArrowButton from '../ArrowButton';
import { ReactComponent as HouseIcon } from '../../assets/house.svg';
import { ReactComponent as ColorIcon } from '../../assets/color.svg';
import PlusButton from '../../library/button/PlusButton';

const ContentsWrap = styled.div`
  width: 100%;
  margin-top: -35.5rem;
  margin-bottom: 15.6rem;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    margin-top: -31rem;
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    margin-top: -20.5rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin-top: -35.5rem;
  }
`;
const ContentsContainer = styled.div`
  margin: 0 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.span`
  ${FONT_STYLE_V1.text.text_100_medium};
  padding-bottom: 10rem;
  background-color: ${PALLETTE_MAIN.main};
  position: relative;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    ${FONT_STYLE_V1.text.text_60_medium};
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE_V1.text.text_60_medium};
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_30_medium};
  }
`;
const CardContainer = styled.div`
  max-width: ${BREAKPOINTDESKTOP}px;
  margin-top: -3rem;
  display: flex;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Card = styled.div`
  width: 350px;
  height: 550px;
  padding: 5rem;
  margin-right: 5rem;
  &:nth-last-child(1) {
    margin-right: 0;
  }
  border: 3px solid ${PALLETTE_MAIN.sub_main};
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    width: 280px;
    height: 400px;
    margin-right: 3rem;
    &:nth-last-child(1) {
      margin-right: 0;
    }
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 600px;
    height: 400px;
    margin: 0;
    margin-bottom: 5rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 300px;
    height: 400px;
    margin: 0;
    margin-bottom: 3rem;
  }
`;
const CardImgBox = styled.div`
  width: 100%;
  flex-grow: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardTitle = styled.span`
  ${FONT_STYLE_V1.text.text_40_medium};
  padding-bottom: 1.5rem;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    ${FONT_STYLE_V1.text.text_20_medium};
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE_V1.text.text_30_medium};
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_20_medium};
  }
`;
const CardText = styled.span`
  ${FONT_STYLE_V1.text.text_18_medium};
  text-align: center;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    ${FONT_STYLE_V1.text.text_12_medium};
    line-height: 1.5;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_12_medium};
    line-height: 1.5;
  }
`;
const ButtonBox = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`;

function Contents() {
  return (
    <ContentsWrap>
      <ContentsContainer>
        <Title>CONTENTS</Title>
        <CardContainer>
          <Card>
            <CardImgBox>
              <HouseIcon />
            </CardImgBox>
            <CardTextBox>
              <CardTitle>ICON</CardTitle>
              <CardText>
                폴룹의 25가지 아이콘 <br /> 사용하러 가기
              </CardText>
            </CardTextBox>
            <ButtonBox>
              <ArrowButton />
            </ButtonBox>
          </Card>
          <Card>
            <CardImgBox>
              <PlusButton />
            </CardImgBox>
            <CardTextBox>
              <CardTitle>COMPONENT</CardTitle>
              <CardText>
                폴룹의 다양한 컴포넌트 <br /> 사용하러 가기
              </CardText>
            </CardTextBox>
            <ButtonBox>
              <ArrowButton />
            </ButtonBox>
          </Card>
          <Card>
            <CardImgBox>
              <ColorIcon />
            </CardImgBox>
            <CardTextBox>
              <CardTitle>COLOR</CardTitle>
              <CardText>
                폴룹 라이브러리의 색상 <br /> 사용하러 가기
              </CardText>
            </CardTextBox>
            <ButtonBox>
              <ArrowButton />
            </ButtonBox>
          </Card>
        </CardContainer>
      </ContentsContainer>
    </ContentsWrap>
  );
}

export default Contents;
