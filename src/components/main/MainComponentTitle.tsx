import { styled } from 'styled-components';
import { PALETTE_COMPONENT } from '../../styles/colors';

const Container = styled.div`
  margin-bottom: 8.4375rem;

  font-size: 6.25rem;
  font-weight: 400;
  color: ${PALETTE_COMPONENT.primary_beige};
`;

function MainComponentTitle() {
  return <Container>COMPONENT</Container>;
}

export default MainComponentTitle;
