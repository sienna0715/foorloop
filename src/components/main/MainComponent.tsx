import { styled } from 'styled-components';
import MainComponentTitle from './MainComponentTitle';
import MainComponentItems from './MainComponentItems';
import { BREAKPOINTTABLET } from '../../breakpoint';

const Container = styled.div`
  width: 100%;
  padding-left: 9rem;
  margin-bottom: 33.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    padding-left: 4.5rem;
    margin-bottom: 20rem;
  }
`;

function MainComponent() {
  return (
    <Container>
      <MainComponentTitle />
      <MainComponentItems />
    </Container>
  );
}

export default MainComponent;
