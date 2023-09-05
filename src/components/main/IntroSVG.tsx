import { styled } from 'styled-components';
import { PALLETTE_MAIN } from '../../styles/colors';

const IntroSVGWrap = styled.svg``;
const TopLine = styled.line``;
const BottomLine = styled.line``;
const BottomPath = styled.path``;
const FillCircle = styled.circle``;
const EmptyCircle = styled.circle``;

function IntroSVG() {
  return (
    <IntroSVGWrap width="100%" height="1600px">
      <TopLine
        x1="50%"
        y1="0"
        x2="50%"
        y2="450"
        strokeWidth={3}
        stroke={PALLETTE_MAIN.sub_main}
      />
      <FillCircle cx="50%" cy="450" r="10" fill={PALLETTE_MAIN.sub_main} />
      <EmptyCircle
        cx="50%"
        cy="990"
        r="20"
        strokeWidth={3}
        stroke={PALLETTE_MAIN.sub_main}
      />
      <FillCircle cx="50%" cy="990" r="10" fill={PALLETTE_MAIN.sub_main} />
      <BottomLine
        x1="50%"
        y1="920"
        x2="50%"
        y2="1250"
        strokeWidth={3}
        stroke={PALLETTE_MAIN.sub_main}
      />
      <BottomPath
        d="M970 990 C 980 1150, 800 1150, 800 1150"
        fill="none"
        strokeWidth={3}
        stroke={PALLETTE_MAIN.sub_main}
      />
      <BottomPath
        d="M970 990 C 960 1150, 1150 1150, 1150 1150"
        fill="none"
        strokeWidth={3}
        stroke={PALLETTE_MAIN.sub_main}
      />
      <BottomLine
        x1="500"
        y1="1150"
        x2="800"
        y2="1150"
        strokeWidth={3}
        stroke={PALLETTE_MAIN.sub_main}
      />
      <BottomLine
        x1="1150"
        y1="1150"
        x2="1450"
        y2="1150"
        strokeWidth={3}
        stroke={PALLETTE_MAIN.sub_main}
      />
      <BottomPath
        d="M300 1350 C 300 1150, 500 1150, 500 1150"
        fill="none"
        strokeWidth={3}
        stroke={PALLETTE_MAIN.sub_main}
      />
      <BottomPath
        d="M1450 1150 C 1450 1150, 1650 1150, 1650 1350"
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
    </IntroSVGWrap>
  );
}

export default IntroSVG;
