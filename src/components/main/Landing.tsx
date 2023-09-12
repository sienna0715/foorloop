import { styled } from 'styled-components';
// components
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import { PALLETTE_MAIN } from '../../styles/colors';
import {
  BREAKPOINTMOBILE,
  BREAKPOINTTABLET,
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
  justify-content: space-between;
  align-items: center;
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
  ${FONT_STYLE_V1.text.text_100_medium};
  padding: 1rem 2rem;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    ${FONT_STYLE_V1.text.text_80_medium};
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_30_medium};
    padding: 0;
  }
`;
const Contents = styled.span`
  ${FONT_STYLE_V1.text.text_50_medium};
  width: max-content;
  text-align: center;
  line-height: 1;
  margin-bottom: 3rem;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    ${FONT_STYLE_V1.text.text_40_medium};
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_14_medium};
    margin-bottom: 0;
    margin-top: 0.5rem;
    line-height: 1.2;
  }
`;
const Button = styled.button`
  ${FONT_STYLE_V1.text.text_20_light};
  padding: 0 8rem;
  border-radius: 5rem;
  border: 3px solid ${PALLETTE_MAIN.sub_main};
  background-color: transparent;
  color: ${PALLETTE_MAIN.sub_main};
  letter-spacing: -1.5px;
  cursor: pointer;
  &:hover {
    background-color: ${PALLETTE_MAIN.sub_main};
    color: ${PALLETTE_MAIN.main};
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_10_medium};
    padding: 0 3rem;
  }
`;

function Landing() {
  return (
    <LandingWrap>
      <LandingContainer>
        <LeftImg className="side_img" />
        <TextBox>
          <Title>FOR&#123;LOOP&#125;</Title>
          <Contents>
            DESIGNER & DEVELOPER <br />
            COMPONENT LIBRARY
          </Contents>
        </TextBox>
        <RightImg className="side_img" />
      </LandingContainer>
      <Button>TRY NOW</Button>
    </LandingWrap>
  );
}

export default Landing;
