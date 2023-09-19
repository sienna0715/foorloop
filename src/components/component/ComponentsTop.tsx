import styled from 'styled-components';
// components
import { PALLETTE_MAIN } from '../../styles/colors';
import CodeBlock from '../CodeBlock';

const ComponentsTopWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 26rem;
  border-bottom: 1px solid ${PALLETTE_MAIN.sub_main};
`;
const Preview = styled.div`
  width: 60rem;
  height: 60rem;
  background-color: ${PALLETTE_MAIN.sub_main};
  border-radius: 3rem;
  margin-right: 13rem;
`;

interface IComponentsTopProps {
  codeDatas: string[];
}

function ComponentsTop({ codeDatas }: IComponentsTopProps) {
  return (
    <ComponentsTopWrap>
      <Preview>g</Preview>
      <CodeBlock
        titles={['React', 'Styled-components']}
        codes={[codeDatas[0], '']}
      />
    </ComponentsTopWrap>
  );
}

export default ComponentsTop;
