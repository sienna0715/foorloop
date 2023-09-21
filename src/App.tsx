import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Components from './pages/Components';
import Header from './components/Header';
import Footer from './components/Footer';
import Icons from './pages/Icons';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/components" element={<Components />} />
        <Route path="/icons" element={<Icons />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
