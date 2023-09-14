import { styled } from 'styled-components';
import { PALETTE_COMPONENT } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';

const Container = styled.div`
  margin-bottom: 13.5rem;
  ${FONT_STYLE_V1.text.text_100_medium}
  font-weight: 400;
  color: ${PALETTE_COMPONENT.primary_beige};
`;

function MainComponentTitle() {
  return <Container>COMPONENT</Container>;
}

export default MainComponentTitle;
