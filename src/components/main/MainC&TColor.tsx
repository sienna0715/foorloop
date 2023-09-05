import { useState } from 'react';
import { styled } from 'styled-components';
import { PALETTE_COMPONENT } from '../../styles/colors';

const Container = styled.div`
  margin-left: 10.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  margin-bottom: 0.625rem;
  font-size: 1.25rem;
  font-weight: 900;
  color: ${PALETTE_COMPONENT.primary_beige};
`;

const TitleInfo = styled.div`
  margin-bottom: 2.875rem;
  font-size: 1.25rem;
  font-weight: 400;
  color: ${PALETTE_COMPONENT.gray04};
`;

const Item = styled.div`
  display: flex;
`;

const BlackColor = styled.div<{ hover: boolean }>`
  padding: 2.5rem;
  border: 2px solid ${PALETTE_COMPONENT.primary_beige};
  border-radius: 2.5rem;
  background-color: ${PALETTE_COMPONENT.primary_black};
  color: ${(props) =>
    props.hover
      ? PALETTE_COMPONENT.primary_beige
      : PALETTE_COMPONENT.primary_black};
  transition: all 0.5s 0.5s;
`;

const BeigeColor = styled.div<{ hover: boolean }>`
  position: absolute;
  padding: 2.5rem;
  margin-left: ${(props) => (props.hover ? '26rem' : '7.5rem')};
  border: 2px solid ${PALETTE_COMPONENT.primary_beige};
  border-radius: 2.5rem;
  background-color: ${PALETTE_COMPONENT.primary_beige};
  color: ${PALETTE_COMPONENT.primary_black};
  transition: all 1s;
`;

const ColorHexText = styled.div`
  margin-right: 13.125rem;
  margin-bottom: 24.375rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 1.25rem;
  font-weight: 400;
`;

const ColorExText = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-size: 5rem;
  font-weight: 400;
`;

function MainColorTypographyColor() {
  const [hover, setHover] = useState(false);

  const mouseHoverHandler = () => {
    setHover(true);
  };

  const mouseLeaveHandler = () => {
    setHover(false);
  };
  return (
    <Container>
      <Title>Color pallette</Title>
      <TitleInfo>This website uses a colorpallette of 2 colors</TitleInfo>
      <Item>
        <BlackColor
          onMouseEnter={mouseHoverHandler}
          onMouseLeave={mouseLeaveHandler}
          hover={hover}
        >
          <ColorHexText>HEX #171717</ColorHexText>
          <ColorExText>Aa</ColorExText>
        </BlackColor>
        <BeigeColor hover={hover}>
          <ColorHexText>HEX #FFF8E7</ColorHexText>
          <ColorExText>Aa</ColorExText>
        </BeigeColor>
      </Item>
    </Container>
  );
}

export default MainColorTypographyColor;
