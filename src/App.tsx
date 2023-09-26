import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// component
import Header from './components/Header';
import Footer from './components/Footer';

const Main = React.lazy(() => import('./pages/Main'));
const Components = React.lazy(() => import('./pages/Components'));
const Icons = React.lazy(() => import('./pages/Icons'));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <Main />
            </Suspense>
          }
        />
        <Route
          path="/components"
          element={
            <Suspense>
              <Components />
            </Suspense>
          }
        />
        <Route
          path="/icons"
          element={
            <Suspense>
              <Icons />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
