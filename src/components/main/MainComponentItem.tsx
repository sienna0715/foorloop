import { styled } from 'styled-components';
import { PALETTE_COMPONENT } from '../../styles/colors';
import ArrowButton from '../ArrowButton';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';

const Container = styled.div`
  width: 36rem;
  height: 50rem;
  padding: 3.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid ${PALETTE_COMPONENT.primary_beige};
  border-radius: 6rem;
  background-color: ${PALETTE_COMPONENT.primary_black};
  cursor: pointer;
`;

const Title = styled.div`
  width: 9.6rem;
  height: 3.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.8rem;
  background-color: ${PALETTE_COMPONENT.primary_beige};
  ${FONT_STYLE_V1.text.text_16_medium}
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
