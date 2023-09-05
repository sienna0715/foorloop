import { styled } from 'styled-components';
import { PALETTE_COMPONENT } from '../../styles/colors';

const Container = styled.div`
  margin-bottom: 7.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 6.25rem;
  font-weight: 400;
  color: ${PALETTE_COMPONENT.primary_beige};
`;

function MainColorTypographyTitle() {
  return <Container>COLOR & TYPOGRAPHY</Container>;
}

export default MainColorTypographyTitle;
