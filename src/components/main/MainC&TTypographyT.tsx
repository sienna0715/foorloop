import { styled } from 'styled-components';
import { PALETTE_COMPONENT } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import { BREAKPOINTMOBILE, BREAKPOINTTABLET } from '../../breakpoint';

const Container = styled.div`
  margin-top: 28.4rem;
  ${FONT_STYLE_V1.text.text_80_medium}
  font-weight: 400;
  color: ${PALETTE_COMPONENT.primary_beige};
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    margin-top: 17.2rem;
    ${FONT_STYLE_V1.text.text_40_medium}
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin-top: 10.2rem;
    ${FONT_STYLE_V1.text.text_20_medium}
  }
`;

function MainColorTypographyTypographyT() {
  return <Container>PP Radio Grotesk</Container>;
}

export default MainColorTypographyTypographyT;
