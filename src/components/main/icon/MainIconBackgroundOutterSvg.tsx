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

const OutterSvg = styled.svg`
  position: absolute;
  animation: ${rotate} 15s linear infinite;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 80rem;
    height: 80rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 40rem;
    height: 40rem;
  }
`;

function MainIconBackgroundOutterSvg() {
  return (
    <OutterSvg
      width="1600"
      height="1600"
      viewBox="0 0 1600 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1457 95C1462.52 95 1467 90.5228 1467 85C1467 79.4772 1462.52 75 1457 75C1451.48 75 1447 79.4772 1447 85C1447 90.5228 1451.48 95 1457 95Z"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M79 898C84.5228 898 89 893.523 89 888C89 882.477 84.5228 878 79 878C73.4772 878 69 882.477 69 888C69 893.523 73.4772 898 79 898Z"
        stroke="white"
        strokeOpacity="0.1"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <circle
        cx="800"
        cy="540"
        r="799"
        stroke="#FFF8E7"
        strokeOpacity="0.05"
        strokeWidth="2"
      />
    </OutterSvg>
  );
}

export default MainIconBackgroundOutterSvg;
