import { useRef } from 'react';
import styled from 'styled-components';
// components
import Contents from '../components/main/Contents';
import Intro from '../components/main/Intro';
import Landing from '../components/main/Landing';
import MainColorTypography from '../components/main/MainC&T';
import MainComponent from '../components/main/MainComponent';
import MainIcon from '../components/main/MainIcon';

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ScrollView = styled.div`
  width: 100%;
`;

function Main() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollView = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <MainWrap>
      <Landing handleScrollView={handleScrollView} />
      <ScrollView ref={scrollRef}>
        <Intro />
      </ScrollView>
      <Contents />
      <MainIcon />
      <MainColorTypography />
      <MainComponent />
    </MainWrap>
  );
}

export default Main;
