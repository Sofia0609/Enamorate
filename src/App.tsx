import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home/Home';
import { ProductDetail } from './pages/ProductDetail/ProductDetail';
import { SobreNosotros } from './pages/SobreNosotros/SobreNosotros';
import { MediosPago } from './pages/MediosPago/MediosPago';
import './styles/globals.css';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/medios-de-pago" element={<MediosPago />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
