import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/base/Footer.css';

const Footer = () => {
  const sendWhatsapp = (selectedProduct) => {
    const telefono = "573002312301";
    const link = `https://wa.me/${telefono}?text=Hola,%20¿cómo%20estás?%20quiero%20esta:%20${selectedProduct}`;
    window.open(link);
  };

  return (
    <div className='Footer'>
      <div className='FooterContainer'>
        <div className='Column'>
          <h5 className='Heading'>Navega</h5>
          <ul className='List'>
            <li className='ListItem'>
              <Link className='Link' to="/">Inicio</Link>
            </li>
            <li className='ListItem'>
              <Link className='Link' to="/catalog">Catálogo</Link>
            </li>
          </ul>
        </div>
        <div className='Column'>
          <h5 className='Heading'>Redes Sociales</h5>
          <ul className='List'>
            <li className='ListItem'>
              <a className='Link' href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">Whatsapp</a>
            </li>
            <li className='ListItem'>
              <a className='Link' href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li className='ListItem'>
              <a className='Link' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
          </ul>
        </div>
        <div className='column'>
          <h5 className='Heading'>Información de Contacto</h5>
          <p>Teléfono: +57 310 755 59 66</p>
          <p>Email: contacto@decoracionesortiz.com</p>
        </div>
        <div className='column'>
          <h5 className='Heading'>Ubicación</h5>
          <p>Calle 10 sur # 25 - 04 Barrio Sinaí, Neiva - Huila</p>
        </div>
      </div>
      <button className='WhatsappButton' onClick={() => sendWhatsapp("cortina kawaii")}>
        Envíanos un Whatsapp
      </button>
    </div>
  );
};

export default Footer;