import styled from 'styled-components';

const ComponentsWrap = styled.div`
  width: 100%;
`;
const ComponentsContainer = styled.div`
  height: 100vh;
`;

function Components() {
  return (
    <ComponentsWrap>
      <ComponentsContainer>TEST</ComponentsContainer>
    </ComponentsWrap>
  );
}

export default Components;
