import { styled } from 'styled-components';
import MainColorTypographyColor from './MainC&TColor';
import MainColorTypographyTypography from './MainC&TTypography';
import { BREAKPOINTDESKTOP } from '../../breakpoint';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function MainColorTypographyItem() {
  return (
    <Container>
      <MainColorTypographyColor />
      <MainColorTypographyTypography />
    </Container>
  );
}

export default MainColorTypographyItem;
