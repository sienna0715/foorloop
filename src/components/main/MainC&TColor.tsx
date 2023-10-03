import { useState } from 'react';
import { styled } from 'styled-components';
import { PALLETTE_MAIN } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import { BREAKPOINTDESKTOP, BREAKPOINTTABLET } from '../../breakpoint';

const Container = styled.div`
  margin-left: 17rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    margin-left: 0;
    margin-bottom: 10rem;
  }
`;

const Title = styled.div`
  margin-bottom: 1rem;
  ${FONT_STYLE_V1.text.text_20_medium}
  font-weight: 900;
  color: ${PALLETTE_MAIN.sub_main};
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE_V1.text.text_12_medium}
  }
`;

const TitleInfo = styled.div`
  margin-bottom: 4.6rem;
  ${FONT_STYLE_V1.text.text_20_medium}
  font-weight: 400;
  color: ${PALLETTE_MAIN.gray};
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE_V1.text.text_12_medium}
  }
`;

const Item = styled.div`
  display: flex;
`;

const BlackColor = styled.div<{ ishover: string }>`
  padding: 4rem;
  border: 2px solid ${PALLETTE_MAIN.sub_main};
  border-radius: 4rem;
  background-color: ${PALLETTE_MAIN.main};
  color: ${(props) =>
    props.ishover === 'true' ? PALLETTE_MAIN.sub_main : PALLETTE_MAIN.main};
  transition: all 0.5s 0.5s;
  transition: margin 1s;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    margin-right: 8rem;
    &:hover {
      margin-right: 30.6rem;
    }
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    padding: 2rem;
    border-radius: 3rem;
    &:hover {
      margin-right: 17.5rem;
    }
  }
`;

const BeigeColor = styled.div<{ ishover: string }>`
  position: absolute;
  padding: 4rem;
  margin-left: ${(props) => (props.ishover === 'true' ? '41.6rem' : '12rem')};
  border: 2px solid ${PALLETTE_MAIN.sub_main};
  border-radius: 4rem;
  background-color: ${PALLETTE_MAIN.sub_main};
  color: ${PALLETTE_MAIN.main};
  transition: all 1s;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    margin-left: ${(props) => (props.ishover === 'true' ? '30.6rem' : '8rem')};
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    padding: 2rem;
    margin-left: ${(props) => (props.ishover === 'true' ? '17.5rem' : '5rem')};
    border-radius: 3rem;
  }
`;

const ColorHexText = styled.div`
  margin-right: 21rem;
  margin-bottom: 39rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${FONT_STYLE_V1.text.text_20_medium}
  font-weight: 400;

  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    margin-right: 10rem;
    margin-bottom: 23rem;
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE_V1.text.text_12_medium}
    margin-right: 5.8rem;
    margin-bottom: 10.8rem;
  }
`;

const ColorExText = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${FONT_STYLE_V1.text.text_80_medium}
  font-weight: 400;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE_V1.text.text_50_medium}
  }
`;

function MainColorTypographyColor() {
  const [isHover, setIsHover] = useState('false');

  const mouseHoverHandler = () => {
    setIsHover('true');
  };

  const mouseLeaveHandler = () => {
    setIsHover('false');
  };
  return (
    <Container>
      <Title>Color pallette</Title>
      <TitleInfo>This website uses a colorpallette of 2 colors</TitleInfo>
      <Item>
        <BlackColor
          onMouseEnter={mouseHoverHandler}
          onMouseLeave={mouseLeaveHandler}
          ishover={isHover}
        >
          <ColorHexText>HEX #171717</ColorHexText>
          <ColorExText>Aa</ColorExText>
        </BlackColor>
        <BeigeColor ishover={isHover}>
          <ColorHexText>HEX #FFF8E7</ColorHexText>
          <ColorExText>Aa</ColorExText>
        </BeigeColor>
      </Item>
    </Container>
  );
}

export default MainColorTypographyColor;
