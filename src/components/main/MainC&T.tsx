import { styled } from 'styled-components';
import MainColorTypographyTitle from './MainC&TTitle';
import MainColorTypographyItem from './MainC&TItem';

const Container = styled.div`
  width: 100%;
  margin-top: 6.25rem;
  margin-bottom: 18.75rem;
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
