import logo from '../logo.svg';
import '../styles/App.css';
import Header from './base/Header';
import Footer from './base/Footer';
import Home from './specific/Home';
import Catalog from './specific/Catalog';
import Services from './specific/Services';
import ContactUs from './specific/ContactUs';
import Login from './specific/user/authentification/Login';
import Register from './specific/user/authentification/Register';
import PasswordRecover from './specific/user/authentification/PasswordRecover';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

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
          <Route path="/login" element={<Login />} />
          <Route path="/sign-in" element={<Register />} />
          <Route path="/password-recover" element={<PasswordRecover />} />
        </Routes>
        <Footer fecha = "prueba de props."/>
      </BrowserRouter>
    </div>
  );
}

export default App;
