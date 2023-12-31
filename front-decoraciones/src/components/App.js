import logo from '../logo.svg';
import '../styles/App.css';
import Header from './base/Header';
import Footer from './base/Footer';
import Home from './specific/Home';
import Catalog from './specific/Catalog';
import Services from './specific/Services';
import ContactUs from './specific/ContactUs';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/contactanos" element={<ContactUs />} />
        </Routes>
        <Footer fecha = "prueba de props."/>
      </BrowserRouter>
    </div>

  );
}

export default App;
