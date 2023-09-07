// components
import Contents from '../components/main/Contents';
import Footer from '../components/main/Footer';
import Header from '../components/main/Header';
import Intro from '../components/main/Intro';
import Landing from '../components/main/Landing';
import MainColorTypography from '../components/main/MainC&T';
import MainComponent from '../components/main/MainComponent';
import MainIcon from '../components/main/MainIcon';

function Main() {
  return (
    <>
      <Header />
      <Landing />
      <Intro />
      <Contents />
      <MainIcon />
      <MainColorTypography />
      <MainComponent />
      <Footer />
    </>
  );
}

export default Main;
