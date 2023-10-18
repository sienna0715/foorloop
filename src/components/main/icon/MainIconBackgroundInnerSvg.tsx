import styled, { keyframes } from 'styled-components';
// components
import { BREAKPOINTMOBILE, BREAKPOINTTABLET } from '../../../breakpoint';

const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(1turn);
  }
`;

const InnerSvg = styled.svg`
  position: absolute;
  animation: ${rotate} 15s linear infinite;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 30rem;
    height: 30rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 15rem;
    height: 15rem;
  }
`;

function MainIconBackgroundInnerSvg() {
  return (
    <InnerSvg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="300"
        cy="300"
        r="299"
        stroke="#FFF8E7"
        strokeOpacity="0.1"
        strokeWidth="2"
      />
    </InnerSvg>
  );
}

export default MainIconBackgroundInnerSvg;
