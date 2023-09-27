import { styled } from 'styled-components';
import { PALLETTE_MAIN } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import { BREAKPOINTMOBILE, BREAKPOINTTABLET } from '../../breakpoint';

const Container = styled.div`
  margin-top: 23rem;
  ${FONT_STYLE_V1.text.text_200_medium}
  font-weight: 400;
  color: ${PALLETTE_MAIN.sub_main};
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    margin-top: 13.8rem;
    ${FONT_STYLE_V1.text.text_120_medium}
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin-top: 7rem;
    ${FONT_STYLE_V1.text.text_100_medium}
  }
`;

function MainColorTypographyTypographyF() {
  return <Container>AaBb</Container>;
}

export default MainColorTypographyTypographyF;
