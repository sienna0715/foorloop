import { styled } from 'styled-components';
import MainColorTypographyTitle from './MainC&TTitle';
import MainColorTypographyItem from './MainC&TItem';
import { BREAKPOINTMOBILE, BREAKPOINTTABLET } from '../../breakpoint';

const Container = styled.div`
  width: 100%;
  margin-top: 10rem;
  margin-bottom: 30rem;
  min-width: 32rem;
  max-width: 192rem;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    margin-bottom: 20rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin-top: 0;
    margin-bottom: 20rem;
  }
`;

function MainColorTypography() {
  return (
    <Container>
      <MainColorTypographyTitle />
      <MainColorTypographyItem />
    </Container>
  );
}

export default MainColorTypography;
