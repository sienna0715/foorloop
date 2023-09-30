import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// component
import Header from './components/Header';
import Footer from './components/Footer';
import Aboutus from './pages/Aboutus';
// optimization
const Main = React.lazy(() => import('./pages/Main'));
const Components = React.lazy(() => import('./pages/Components'));
const Icons = React.lazy(() => import('./pages/Icons'));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense>
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
