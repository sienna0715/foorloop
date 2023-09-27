import styled from 'styled-components';
// components
import { PALLETTE_MAIN } from '../../styles/colors';
// import componentsData from '../../data/componentsData';
import codeDatas from '../../data/componentsCodeDatas';
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IComponentsTopProps {
  currentItem: string;
}

function ComponentsTop({ currentItem }: IComponentsTopProps) {
  const datas = codeDatas[+currentItem];

  return (
    <ComponentsTopWrap>
      <Preview>{datas?.component}</Preview>
      <CodeBlock titles={['React', 'Styled-components']} codes={datas?.code} />
    </ComponentsTopWrap>
  );
}

export default ComponentsTop;
