import styled from 'styled-components';
import { PALETTE_COMPONENT } from '../styles/colors';
import CodeBlock from '../components/CodeBlock';
import { FONT_STYLE_V1 } from '../styles/fontStyles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 16.5rem;
`;

const PreView = styled.div`
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconPreView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ZoomIcon = styled.div`
  width: 68rem;
  height: 68rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${PALETTE_COMPONENT.primary_beige};
  border-radius: 50%;
`;

const CodePreView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
`;
const TitleDot = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 2rem;
  background-color: ${PALETTE_COMPONENT.primary_beige};
  border-radius: 50%;
`;
const TitleText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${FONT_STYLE_V1.text.text_18_medium}
  font-weight: 400;
  color: ${PALETTE_COMPONENT.primary_beige};
`;
const Color = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const ColorText = styled.div`
  width: 18rem;
  height: 3.6rem;
  margin-bottom: 5rem;
  margin-right: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${PALETTE_COMPONENT.primary_beige};
  border-radius: 1.8rem;
  ${FONT_STYLE_V1.text.text_24_medium}
  font-weight: 400;
  color: ${PALETTE_COMPONENT.primary_beige};
`;
const SelectedColor = styled.div`
  width: 18rem;
  height: 3.6rem;
  margin-bottom: 5rem;
  border: 2px solid ${PALETTE_COMPONENT.primary_beige};
  border-radius: 1.8rem;
  background-color: ${PALETTE_COMPONENT.primary_beige};
`;

const IconsList = styled.div``;
function Icons() {
  return (
    <Wrapper>
      <PreView>
        <IconPreView>
          <ZoomIcon />
        </IconPreView>
        <CodePreView>
          <Title>
            <TitleDot />
            <TitleText>{`icon > home icon`}</TitleText>
          </Title>
          <Color>
            <ColorText>color</ColorText>
            <SelectedColor />
            {/* react color 추가 */}
          </Color>
          {/* react code block 추기 */}
          <CodeBlock />
        </CodePreView>
      </PreView>
      <IconsList>{/* icon map 적용하기 */}</IconsList>
    </Wrapper>
  );
}

export default Icons;
