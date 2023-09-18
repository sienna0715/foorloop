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

function Main() {
  return (
    <MainWrap>
      <Landing />
      <Intro />
      <Contents />
      <MainIcon />
      <MainColorTypography />
      <MainComponent />
    </MainWrap>
  );
}

export default Main;
