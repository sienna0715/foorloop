import styled from 'styled-components';
// components
import { PALLETTE_MAIN } from '../../../styles/colors';
import MainIconBackgroundOutterSvg from './MainIconBackgroundOutterSvg';
import MainIconBackgroundInnerSvg from './MainIconBackgroundInnerSvg';
import MainIconBackgroundMiddleSvg from './MainIconBackgroundMiddleSvg';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${PALLETTE_MAIN.main};
  overflow: hidden;
`;

function MainIconBackground() {
  return (
    <Container>
      <MainIconBackgroundOutterSvg />
      <MainIconBackgroundMiddleSvg />
      <MainIconBackgroundInnerSvg />
    </Container>
  );
}

export default MainIconBackground;
