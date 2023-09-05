import { styled } from 'styled-components';
import MainColorTypographyColor from './MainC&TColor';
import MainColorTypographyTypography from './MainC&TTypography';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
