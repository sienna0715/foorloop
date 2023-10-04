import { useEffect, useState } from 'react';
import styled from 'styled-components';
// components
import ComponentsTop from '../components/component/ComponentsTop';
import ComponentsBottom from '../components/component/ComponentsBottom';
// import codeData from '../data/componentsCodeDatas';

const ComponentsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ComponentsContainer = styled.div`
  margin-bottom: 26.5rem;
`;

function Components() {
  const [currentItem, setCurrentItem] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ComponentsWrap>
      <ComponentsContainer>
        <ComponentsTop currentItem={currentItem} />
        <ComponentsBottom setCurrentItem={setCurrentItem} />
      </ComponentsContainer>
    </ComponentsWrap>
  );
}

export default Components;
