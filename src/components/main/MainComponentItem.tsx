import { styled } from 'styled-components';
import { PALETTE_COMPONENT } from '../../styles/colors';
import ArrowButton from '../ArrowButton';

const Container = styled.div`
  width: 22.5rem;
  height: 31.25rem;
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid ${PALETTE_COMPONENT.primary_beige};
  border-radius: 3.75rem;
  background-color: ${PALETTE_COMPONENT.primary_black};
  cursor: pointer;
`;

const Title = styled.div`
  width: 6rem;
  height: 2.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.125rem;
  background-color: ${PALETTE_COMPONENT.primary_beige};

  font-size: 1rem;
  font-weight: 400;
  color: ${PALETTE_COMPONENT.primary_black};
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

interface MainComponentItemprops {
  title: string;
  children: JSX.Element;
}

function MainComponentItem({ title, children }: MainComponentItemprops) {
  return (
    <Container>
      <Title>{title}</Title>
      <Item>{children}</Item>
      <ArrowButtonContainer>
        <ArrowButton />
      </ArrowButtonContainer>
    </Container>
  );
}

export default MainComponentItem;
