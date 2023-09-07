import { styled } from 'styled-components';
// components
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import { PALLETTE_MAIN } from '../../styles/colors';
import Left from '../../assets/landing-left.svg';
import Right from '../../assets/landing-right.svg';

const LandingWrap = styled.div`
  width: 100%;
  height: min-content;
  position: relative;
  margin-bottom: 3rem;
`;
const LandingContainer = styled.div`
  margin: 0 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const LeftImg = styled.img`
  position: absolute;
  top: 5rem;
  left: 0;
`;
const RightImg = styled.img`
  position: absolute;
  top: 5rem;
  right: 0;
`;
const Title = styled.span`
  ${FONT_STYLE_V1.text.text_180_medium};
  padding-bottom: 1rem;
`;
const Contents = styled.span`
  ${FONT_STYLE_V1.text.text_100_medium};
  text-align: center;
  line-height: 0.9;
  margin-bottom: 3rem;
`;
const Button = styled.button`
  ${FONT_STYLE_V1.text.text_40_light};
  width: 25rem;
  border-radius: 5rem;
  border: 3px solid ${PALLETTE_MAIN.sub_main};
  background-color: transparent;
  color: ${PALLETTE_MAIN.sub_main};
  letter-spacing: -1.5px;
  cursor: pointer;
  &:hover {
    background-color: ${PALLETTE_MAIN.sub_main};
    color: ${PALLETTE_MAIN.main};
  }
`;

function Landing() {
  return (
    <LandingWrap>
      <LeftImg src={Left} />
      <RightImg src={Right} />
      <LandingContainer>
        <Title>FOR&#123;LOOP&#125;</Title>
        <Contents>
          DESIGNER & DEVELOPER <br />
          COMPONENT LIBRARY
        </Contents>
        <Button>TRY NOW</Button>
      </LandingContainer>
    </LandingWrap>
  );
}

export default Landing;
