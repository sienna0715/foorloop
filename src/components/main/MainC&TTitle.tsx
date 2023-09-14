import { styled } from 'styled-components';
import { PALETTE_COMPONENT } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import { BREAKPOINTDESKTOP, BREAKPOINTMOBILE } from '../../breakpoint';

const Container = styled.div`
  margin-bottom: 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${FONT_STYLE_V1.text.text_100_medium}
  font-weight: 400;
  color: ${PALETTE_COMPONENT.primary_beige};
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    ${FONT_STYLE_V1.text.text_60_medium}
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_30_medium}
  }
`;

function MainColorTypographyTitle() {
  return <Container>COLOR & TYPOGRAPHY</Container>;
}

export default MainColorTypographyTitle;
