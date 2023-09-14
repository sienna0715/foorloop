import { styled } from 'styled-components';
import { PALETTE_COMPONENT } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import { BREAKPOINTTABLET } from '../../breakpoint';

const Container = styled.div`
  margin-right: 9rem;
  margin-bottom: 4.5rem;
  ${FONT_STYLE_V1.text.text_100_medium}
  font-weight: 400;
  text-align: center;
  color: ${PALETTE_COMPONENT.primary_beige};
  @media screen and (max-width: 1024px) {
    ${FONT_STYLE_V1.text.text_80_medium}
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    margin-right: 4.5rem;
    ${FONT_STYLE_V1.text.text_35_medium}
  }
`;

function MainComponentTitle() {
  return <Container>COMPONENT</Container>;
}

export default MainComponentTitle;
