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

const MiddleSvg = styled.svg`
  position: absolute;
  animation: ${rotate} 15s linear infinite;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 50rem;
    height: 50rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 25rem;
    height: 25rem;
  }
`;

function MainIconBackgroundMiddleSvg() {
  return (
    <MiddleSvg
      width="1000"
      height="1000"
      viewBox="0 0 1000 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 321.157C45.5228 321.157 50 316.68 50 311.157C50 305.634 45.5228 301.157 40 301.157C34.4772 301.157 30 305.634 30 311.157C30 316.68 34.4772 321.157 40 321.157Z"
        fill="#FEF7E6"
      />
      <path
        d="M870 844C875.523 844 880 839.523 880 834C880 828.477 875.523 824 870 824C864.477 824 860 828.477 860 834C860 839.523 864.477 844 870 844Z"
        stroke="white"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <circle
        cx="500"
        cy="500"
        r="499"
        stroke="#FFF8E7"
        strokeOpacity="0.1"
        strokeWidth="2"
      />
    </MiddleSvg>
  );
}

export default MainIconBackgroundMiddleSvg;
