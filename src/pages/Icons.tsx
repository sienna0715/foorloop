import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PreView = styled.div`
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CodePreView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div``;
const TitleText = styled.div``;
const Color = styled.div``;
const ColorText = styled.div``;
const SelectedColor = styled.div``;
const CodeBlock = styled.div``;
const CodeBlockTab = styled.div``;

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
            <TitleText />
          </Title>
          <Color>
            <ColorText />
            <SelectedColor />
            {/* react color 추가 */}
          </Color>
          <CodeBlock>
            <CodeBlockTab />
            {/* react code block 추기 */}
          </CodeBlock>
        </CodePreView>
      </PreView>
      <IconsList>{/* icon map 적용하기 */}</IconsList>
    </Wrapper>
  );
}

export default Icons;
