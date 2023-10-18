import { useEffect, useRef } from 'react';
import styled from 'styled-components';
// components
import Contents from '../components/main/Contents';
import Intro from '../components/main/Intro';
import Landing from '../components/main/Landing';
import MainColorTypography from '../components/main/MainC&T';
import MainComponent from '../components/main/MainComponent';
import MainIcon from '../components/main/icon/MainIcon';

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ScrollView = styled.div`
  width: 100%;
`;

function Main() {
  const movetoIntroRef = useRef<HTMLDivElement>(null);
  const movetoColorRef = useRef<HTMLDivElement>(null);

  const handleIntroView = () => {
    movetoIntroRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };
  const handleColorView = () => {
    movetoColorRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainWrap>
      <Landing handleIntroView={handleIntroView} />
      <ScrollView ref={movetoIntroRef}>
        <Intro />
      </ScrollView>
      <Contents handleColorView={handleColorView} />
      <MainIcon />
      <ScrollView ref={movetoColorRef}>
        <MainColorTypography />
      </ScrollView>
      <MainComponent />
    </MainWrap>
  );
}

export default Main;
