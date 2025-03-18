import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { IntlProvider } from 'react-intl';
import Header from './base/Header';
import PrivacyPolicy from './sections/PrivacyPolicy';
import TermsAndConditions from './sections/TermsAndConditions';
import TechnicalSupport from './sections/TechnicalSupport';
import Copyright from './sections/Copyright';
import Footer from './base/Footer';
import Home from './specific/Home';
import Catalog from './specific/Catalog';
import Services from './specific/Services';
import Installations from './services/Installations'; 
import Maintenance from './services/Maintenance'; 
import Repairs from './services/Repairs'; 
import Warranties from './services/Warranties'; 
import Pqrs from './services/Pqrs'; 
import Gallery from './specific/products/Gallery'; 
import Requests from './specific/Requests';
import ContactUs from './specific/ContactUs';
import Login from './specific/user/authentification/Login';
import Register from './specific/user/authentification/Register';
import PasswordRecover from './specific/user/authentification/PasswordRecover';
import CrearFactura from './billing/crearFactura'; // Ruta actualizada
import BuscarFactura from './billing/buscarFactura'; // Ruta actualizada
import EditarFactura from './billing/editarFactura'; // Ruta actualizada
import EliminarFactura from './billing/eliminarFactura'; // Ruta actualizada
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

const messages = {
  en: {
    search: 'Search'
  },
  es: {
    search: 'Buscar'
  }
};

const App = () => {
  return (
    <IntlProvider locale="es" messages={messages['es']}>
      <div className='App'>
        <BrowserRouter>
          <Header />
          <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<Catalog />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/installations" element={<Installations />} /> 
              <Route path="/maintenance" element={<Maintenance />} /> 
              <Route path="/repairs" element={<Repairs />} /> 
              <Route path="/warranties" element={<Warranties />} /> 
              <Route path="/pqrs" element={<Pqrs />} /> 
              <Route path="/gallery" element={<Gallery />} /> 
              <Route path="/requests" element={<Requests />} />
              <Route path="/contactanos" element={<ContactUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-in" element={<Register />} />
              <Route path="/password-recover" element={<PasswordRecover />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/technical-support" element={<TechnicalSupport />} />
              <Route path="/copyright" element={<Copyright />} />
              <Route path="/facturacion/nueva" element={<CrearFactura />} />
              <Route path="/facturacion/buscar" element={<BuscarFactura />} />
              <Route path="/facturacion/editar" element={<EditarFactura />} />
              <Route path="/facturacion/eliminar" element={<EliminarFactura />} />
            </Routes>
          </Container>
          <Footer />
        </BrowserRouter>
      </div>
    </IntlProvider>
  );
}

export default App;
