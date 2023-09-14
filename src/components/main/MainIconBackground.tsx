import { styled, keyframes } from 'styled-components';
import { PALETTE_COMPONENT } from '../../styles/colors';
import { BREAKPOINTMOBILE, BREAKPOINTTABLET } from '../../breakpoint';

const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(1turn);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${PALETTE_COMPONENT.primary_black};
  overflow: hidden;
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

function MainIconBackground() {
  return (
    <Container>
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
    </Container>
  );
}

export default MainIconBackground;
