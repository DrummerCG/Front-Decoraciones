import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/base/Footer.css';
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

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
             <Link className='Link' to="/terms-and-conditions">Términos y Condiciones</Link>
            </li>
            <li className='ListItem'>
              <Link className='Link' to="/privacy-policy">Políticas de Privacidad</Link>
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
            <a className='Link1' href="https://wa.me/573107555966" ><FaWhatsappSquare /></a>
            </li>
            <li className='ListItem'>
              <a className='Link2' href="https://www.facebook.com/share/19hkcs69RJ/" ><FaFacebookSquare /></a>
            </li>
            <li className='ListItem'>
              <a className='Link3' href="https://www.instagram.com/pablo.emilioortiz"><FaSquareInstagram /></a>
            </li>
          </ul>
        </div>
        <div className='Column'>
          <h5 className='Heading'>Información de Contacto</h5>
          <p><b>Teléfono: </b> 
          +57 310 755 59 66</p>
          <p><b>Emails:</b>  
          <a href="mailto:contacto.decoracionesortiz@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }} onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}> contacto.decoracionesortiz@gmail.com</a>
          <a href="mailto:soporte.decoracionesortiz@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }} onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}> soporte.decoracionesortiz@gmail.com</a>
          </p>
        </div>
        <div className='column'>
          <h5 className='Heading'>Ubicación</h5>
          <img src='/Ubicación.png' className='Ubicacion' />
          <a href="https://www.google.com/maps?q=Calle+10+sur+%23+25-04+Barrio+Sina%C3%AD,+Neiva,+Huila"
           target="_blank" rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }} onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
  >
    <p>Calle 10 sur # 25 - 04 Barrio Sinaí, Neiva - Huila</p>
  </a>
</div>
      </div>
      <button className='WhatsappButton' onClick={() => sendWhatsapp("cortina kawaii")}>
            <a href="https://wa.me/573107555966" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}> Enviar un WhatsApp</a>   
      </button>
    </div>
  );
};

export default Footer;
