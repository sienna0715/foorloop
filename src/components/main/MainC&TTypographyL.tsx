import { styled } from 'styled-components';
import { PALETTE_COMPONENT } from '../../styles/colors';

const Container = styled.div`
  margin-top: 8.25rem;

  font-size: 3.75rem;
  font-weight: 400;
  color: ${PALETTE_COMPONENT.primary_beige};
`;

const NumText = styled.div`
  font-size: 4.05rem;
`;

function MainColorTypographyTypographyL() {
  return (
    <Container>
      <div>Aa Bb Cc Dd Ee Ff Gg</div>
      <div>Hh Ii Jj Kk Ll Mm Nn</div>
      <div>Oo Pp Qq Rr Ss Tt Uu</div>
      <div>Vv Ww Xx Yy Zz</div>
      <NumText>1 2 3 4 5 6 7 8 9 0</NumText>
    </Container>
  );
}

export default MainColorTypographyTypographyL;
