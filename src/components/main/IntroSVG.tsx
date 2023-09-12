import { styled } from 'styled-components';
import { PALLETTE_MAIN } from '../../styles/colors';
import {
  BREAKPOINTMOBILE,
  BREAKPOINTTABLET,
  BREAKPOINTDESKTOP,
} from '../../breakpoint';

const IntroSVGWrap = styled.div`
  width: 100%;
  position: relative;
`;
const TopContainer = styled.svg``;
const BottomContainer = styled.svg`
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    display: none;
  }
`;
const BottomTransfer = styled.g`
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    transform: translateY(-95px);
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    transform: translateY(17px);
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    transform: translateY(-93px);
  }
`;
const TopLine = styled.line``;
const BottomLine = styled.line``;
const BottomPath = styled.path``;
const FillCircle = styled.circle``;
const EmptyCircle = styled.circle``;

function IntroSVG() {
  return (
    <IntroSVGWrap>
      <TopContainer width="100%" height="1500">
        <TopLine
          x1="50%"
          y1="0"
          x2="50%"
          y2="450"
          strokeWidth={3}
          stroke={PALLETTE_MAIN.sub_main}
        />
        <FillCircle cx="50%" cy="450" r="10" fill={PALLETTE_MAIN.sub_main} />
        <BottomTransfer>
          <EmptyCircle
            cx="50%"
            cy="925"
            r="20"
            strokeWidth={3}
            stroke={PALLETTE_MAIN.sub_main}
          />
          <FillCircle cx="50%" cy="925" r="10" fill={PALLETTE_MAIN.sub_main} />
          <BottomLine
            x1="50%"
            y1="850"
            x2="50%"
            y2="1300"
            strokeWidth={3}
            stroke={PALLETTE_MAIN.sub_main}
          />
        </BottomTransfer>
        <BottomContainer width="100%" height="1500" viewBox="100 0 1740 1500">
          <BottomPath
            d="M970 925 C 970 1100, 800 1100, 800 1100"
            fill="none"
            strokeWidth={3}
            stroke={PALLETTE_MAIN.sub_main}
          />
          <BottomPath
            d="M970 925 C 970 1100, 1150 1100, 1150 1100"
            fill="none"
            strokeWidth={3}
            stroke={PALLETTE_MAIN.sub_main}
          />
          <BottomLine
            x1="700"
            y1="1100"
            x2="800"
            y2="1100"
            strokeWidth={3}
            stroke={PALLETTE_MAIN.sub_main}
          />
          <BottomLine
            x1="1150"
            y1="1100"
            x2="1250"
            y2="1100"
            strokeWidth={3}
            stroke={PALLETTE_MAIN.sub_main}
          />
          <BottomPath
            d="M500 1250 C 500 1100, 700 1100, 700 1100"
            fill="none"
            strokeWidth={3}
            stroke={PALLETTE_MAIN.sub_main}
          />
          <BottomPath
            d="M1250 1100 C 1250 1100, 1450 1100, 1450 1250"
            fill="none"
            strokeWidth={3}
            stroke={PALLETTE_MAIN.sub_main}
          />
          <BottomLine
            x1="500"
            y1="1250"
            x2="500"
            y2="1500"
            strokeWidth={3}
            stroke={PALLETTE_MAIN.sub_main}
          />
          <BottomLine
            x1="1450"
            y1="1250"
            x2="1450"
            y2="1500"
            strokeWidth={3}
            stroke={PALLETTE_MAIN.sub_main}
          />
        </BottomContainer>
      </TopContainer>
    </IntroSVGWrap>
  );
}

export default IntroSVG;
