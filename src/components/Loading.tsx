import styled from 'styled-components';
import { FONT_STYLE_V1 } from '../styles/fontStyles';
import { PALLETTE_MAIN } from '../styles/colors';

const Text = styled.p`
  ${FONT_STYLE_V1.text.text_16_medium};
  color: ${PALLETTE_MAIN.main};
`;

function Loading() {
  return <Text>Loading...</Text>;
}

export default Loading;
