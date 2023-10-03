import { styled } from 'styled-components';
// components
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import { PALLETTE_MAIN } from '../../styles/colors';
import {
  BREAKPOINTMOBILE,
  BREAKPOINTTABLET,
  BREAKPOINTDESKTOPSMALL,
  BREAKPOINTDESKTOP,
} from '../../breakpoint';
import { ReactComponent as LeftImg } from '../../assets/landing-left.svg';
import { ReactComponent as RightImg } from '../../assets/landing-right.svg';

const LandingWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LandingContainer = styled.div`
  width: 100%;
  height: min-content;
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .side_img {
    position: absolute;
    top: 4rem;
    transform: scale(0.8);
  }
  .left {
    left: -4rem;
  }
  .right {
    right: -3rem;
  }
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    .side_img {
      top: -1rem;
      transform: scale(0.6);
    }
    .left {
      left: -5rem;
    }
    .right {
      right: -5rem;
    }
  }
  @media screen and (max-width: ${BREAKPOINTDESKTOPSMALL}px) {
    .side_img {
      top: -3rem;
      transform: scale(0.5);
    }
    .left {
      left: -10rem;
    }
    .right {
      right: -10rem;
    }
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    justify-content: center;
    .side_img {
      display: none;
    }
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.span`
  ${FONT_STYLE_V1.text.text_150_medium};
  padding: 1rem 2rem;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    ${FONT_STYLE_V1.text.text_100_medium};
  }
  @media screen and (max-width: ${BREAKPOINTDESKTOPSMALL}px) {
    ${FONT_STYLE_V1.text.text_80_medium};
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE_V1.text.text_60_medium};
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_45_medium};
    padding: 0;
  }
`;
const Contents = styled.span`
  ${FONT_STYLE_V1.text.text_80_medium};
  width: max-content;
  text-align: center;
  line-height: 1;
  margin-bottom: 3rem;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    ${FONT_STYLE_V1.text.text_60_medium};
  }
  @media screen and (max-width: ${BREAKPOINTDESKTOPSMALL}px) {
    ${FONT_STYLE_V1.text.text_50_medium};
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE_V1.text.text_40_medium};
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_24_medium};
    margin-bottom: 0;
    margin-top: 0.5rem;
    line-height: 1.2;
  }
`;
const Button = styled.button`
  ${FONT_STYLE_V1.text.text_30_medium};
  padding: 0 9rem;
  line-height: 1.2;
  border-radius: 5rem;
  border: 3px solid ${PALLETTE_MAIN.sub_main};
  background-color: transparent;
  color: ${PALLETTE_MAIN.sub_main};
  cursor: pointer;
  &:hover {
    background-color: ${PALLETTE_MAIN.sub_main};
    color: ${PALLETTE_MAIN.main};
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_12_medium};
    border: 1px solid ${PALLETTE_MAIN.sub_main};
    padding: 0 4rem;
  }
`;

interface ILandingProps {
  handleIntroView: React.MouseEventHandler<HTMLButtonElement>;
}

function Landing({ handleIntroView }: ILandingProps) {
  return (
    <LandingWrap>
      <LandingContainer>
        <LeftImg className="side_img left" />
        <TextBox>
          <Title>FOR&#123;LOOP&#125;</Title>
          <Contents>
            DESIGNER & DEVELOPER <br />
            COMPONENT LIBRARY
          </Contents>
        </TextBox>
        <RightImg className="side_img right" />
      </LandingContainer>
      <Button onClick={handleIntroView}>TRY NOW</Button>
    </LandingWrap>
  );
}

export default Landing;
