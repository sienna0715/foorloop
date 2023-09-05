import { styled } from 'styled-components';
import MainColorTypographyTitle from './MainC&TTitle';
import MainColorTypographyItem from './MainC&TItem';

const Container = styled.div`
  width: 100%;
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
