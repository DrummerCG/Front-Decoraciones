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
              <Link className='Link' to="/privacy-policy">Políticas de Privacidad</Link>
            </li>
            <li className='ListItem'>
              <Link className='Link' to="/terms-and-conditions">Términos y Condiciones</Link>
            </li>
            <li className='ListItem'>
              <Link className='Link' to="/technical-support">Soporte técnico</Link>
            </li>
            <li className='ListItem'>
              <Link className='Link' to="/copyright">Copyright</Link> {/* Enlace actualizado */}
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
              <a className='Link' href="https://www.facebook.com/share/19hkcs69RJ/" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li className='ListItem'>
              <a className='Link' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
          </ul>
        </div>
        <div className='Column'>
          <h5 className='Heading'>Información de Contacto</h5>
          <p>Teléfono: +57 310 755 59 66</p>
          <p>Email:  
          <a href="mailto:pablo.emilio16@hotmail.com" style={{ textDecoration: 'none', color: 'inherit' }}> pablo.emilio16@hotmail.com</a>
          </p>
        </div>
        <div className='column'>
  <h5 className='Heading'>Ubicación</h5>
  <a href="https://www.google.com/maps?q=Calle+10+sur+%23+25-04+Barrio+Sina%C3%AD,+Neiva,+Huila"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    <p>Calle 10 sur # 25 - 04 Barrio Sinaí, Neiva - Huila</p>
  </a>
</div>
      </div>
      <button className='WhatsappButton' onClick={() => sendWhatsapp("cortina kawaii")}>
            <a href="https://wa.me/573107555966" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}> Envíanos un WhatsApp</a>   
      </button>
    </div>
  );
};

export default Footer;
