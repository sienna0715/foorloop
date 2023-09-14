import { styled } from 'styled-components';
import { PALETTE_COMPONENT } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import { BREAKPOINTMOBILE, BREAKPOINTTABLET } from '../../breakpoint';

const Container = styled.div`
  margin-top: 13.2rem;
  ${FONT_STYLE_V1.text.text_60_medium}
  font-weight: 400;
  color: ${PALETTE_COMPONENT.primary_beige};
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    margin-top: 7.8rem;
    ${FONT_STYLE_V1.text.text_30_medium}
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin-top: 6.6rem;
    ${FONT_STYLE_V1.text.text_20_medium}
  }
`;

const NumText = styled.div`
  ${FONT_STYLE_V1.text.text_60_medium}
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE_V1.text.text_35_medium}
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_20_medium}
  }
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
