import { styled } from 'styled-components';
import { PALLETTE_MAIN } from '../../styles/colors';
import ArrowButton from '../ArrowButton';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import { BREAKPOINTTABLET } from '../../breakpoint';

const Container = styled.div`
  width: 36rem;
  height: 50rem;
  padding: 3.6rem;
  margin-top: 9rem;
  margin-right: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid ${PALLETTE_MAIN.sub_main};
  border-radius: 6rem;
  background-color: ${PALLETTE_MAIN.main};
  cursor: pointer;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 21.6rem;
    height: 30rem;
    padding: 2.16rem;
    margin-top: 4.5rem;
    margin-right: 4.5rem;
    border-radius: 3.6rem;
  }
`;

const Title = styled.div`
  width: 9.6rem;
  height: 3.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.8rem;
  background-color: ${PALLETTE_MAIN.sub_main};
  ${FONT_STYLE_V1.text.text_16_medium}
  font-weight: 400;
  color: ${PALLETTE_MAIN.main};
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 5.76rem;
    height: 2.16rem;
    border-radius: 1.08rem;
    ${FONT_STYLE_V1.text.text_10_medium}
  }
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
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    svg {
      width: 2.88rem;
      height: 2.88rem;
    }
  }
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
