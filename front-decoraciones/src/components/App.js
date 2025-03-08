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
import Installations from './specific/products/Installations'; // Asegúrate de que la ruta sea correcta
import Maintenance from './specific/products/Maintenance'; // Asegúrate de que la ruta sea correcta
import Repairs from './specific/products/Repairs'; // Asegúrate de que la ruta sea correcta
import Warranties from './specific/products/Warranties'; // Asegúrate de que la ruta sea correcta
import Pqrs from './specific/products/Pqrs'; // Asegúrate de que la ruta sea correcta
import Gallery from './specific/products/Gallery'; // Asegúrate de que la ruta sea correcta
import Requests from './specific/Requests';
import ContactUs from './specific/ContactUs';
import Login from './specific/user/authentification/Login';
import Register from './specific/user/authentification/Register';
import PasswordRecover from './specific/user/authentification/PasswordRecover';
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
            </Routes>
          </Container>
          <Footer />
        </BrowserRouter>
      </div>
    </IntlProvider>
  );
}

export default App;
