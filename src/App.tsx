import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
// component
import Header from './components/Header';
import Footer from './components/Footer';
import Aboutus from './pages/Aboutus';
import Loading from './components/Loading';
import { PALLETTE_MAIN } from './styles/colors';
// optimization
const Main = React.lazy(() => import('./pages/Main'));
const Components = React.lazy(() => import('./pages/Components'));
const Icons = React.lazy(() => import('./pages/Icons'));

const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: ${PALLETTE_MAIN.sub_main};
  }
`;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense
        fallback={
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        }
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/components" element={<Components />} />
          <Route path="/icons" element={<Icons />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
