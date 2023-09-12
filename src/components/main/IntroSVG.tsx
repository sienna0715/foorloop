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
    transform: translateY(-55px);
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
            y2="1200"
            strokeWidth={3}
            stroke={PALLETTE_MAIN.sub_main}
          />
        </BottomTransfer>
        <BottomContainer width="100%" height="100%" viewBox="0 -1200 1062 2000">
          <BottomPath
            d="M531 9.53674e-06V99.9191C531 182.762 463.843 249.919 381 249.919H151C68.1573 249.919 1 317.076 1 399.919V581"
            fill="none"
            strokeWidth={3}
            stroke={PALLETTE_MAIN.sub_main}
          />
          <BottomPath
            d="M531 0V99.9191C531 182.762 598.157 249.919 681 249.919H911C993.843 249.919 1061 317.076 1061 399.919V581"
            fill="none"
            strokeWidth={3}
            stroke={PALLETTE_MAIN.sub_main}
          />
        </BottomContainer>
      </TopContainer>
    </IntroSVGWrap>
  );
}

export default IntroSVG;
