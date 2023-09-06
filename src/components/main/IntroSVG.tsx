import { styled } from 'styled-components';
import { PALLETTE_MAIN } from '../../styles/colors';
import { BREAKPOINTDESKTOP } from '../../breakpoint';

const IntroSVGWrap = styled.div`
  width: 100%;
`;
const TopContainer = styled.svg``;
const BottomContainer = styled.svg`
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    display: none;
  }
`;
const BottomTransfer = styled.g`
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    transform: translateY(120px);
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
      <TopContainer width="100%" height="1700">
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
            cy="1040"
            r="20"
            strokeWidth={3}
            stroke={PALLETTE_MAIN.sub_main}
          />
          <FillCircle cx="50%" cy="1040" r="10" fill={PALLETTE_MAIN.sub_main} />
          <BottomLine
            x1="50%"
            y1="950"
            x2="50%"
            y2="1300"
            strokeWidth={3}
            stroke={PALLETTE_MAIN.sub_main}
          />
        </BottomTransfer>

        <BottomContainer width="100%" height="100%" viewBox="0 0 1940 1600">
          <BottomPath
            d="M970 1040 C 970 1200, 800 1200, 800 1200"
            fill="none"
            strokeWidth={3}
            stroke={PALLETTE_MAIN.sub_main}
          />
          <BottomPath
            d="M970 1040 C 970 1200, 1150 1200, 1150 1200"
            fill="none"
            strokeWidth={3}
            stroke={PALLETTE_MAIN.sub_main}
          />
          <BottomLine
            x1="500"
            y1="1200"
            x2="800"
            y2="1200"
            strokeWidth={3}
            stroke={PALLETTE_MAIN.sub_main}
          />
          <BottomLine
            x1="1150"
            y1="1200"
            x2="1450"
            y2="1200"
            strokeWidth={3}
            stroke={PALLETTE_MAIN.sub_main}
          />
          <BottomPath
            d="M300 1350 C 300 1200, 500 1200, 500 1200"
            fill="none"
            strokeWidth={3}
            stroke={PALLETTE_MAIN.sub_main}
          />
          <BottomPath
            d="M1450 1200 C 1450 1200, 1650 1200, 1650 1350"
            fill="none"
            strokeWidth={3}
            stroke={PALLETTE_MAIN.sub_main}
          />
          <BottomLine
            x1="300"
            y1="1350"
            x2="300"
            y2="1550"
            strokeWidth={3}
            stroke={PALLETTE_MAIN.sub_main}
          />
          <BottomLine
            x1="1650"
            y1="1350"
            x2="1650"
            y2="1550"
            strokeWidth={3}
            stroke={PALLETTE_MAIN.sub_main}
          />
        </BottomContainer>
      </TopContainer>
    </IntroSVGWrap>
  );
}

export default IntroSVG;
