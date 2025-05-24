import React from 'react';
import styled from 'styled-components';
import '../../styles/specific/buttons.css'; // Importa el archivo CSS para los botones
import '../../styles/specific/ContactUs.css'; // Importa el archivo CSS para ContactUs
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const ContactContainer = styled.div`
  display: grid;
  width: 70%;
  place-items: center;
  margin-top: 100px;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #000000;
  margin-top: 2rem;
  margin-bottom: 3rem;
  font-weight: bold;
  font-family: 'Georgia', serif;
`;


const Heading2 = styled.h2`
  margin-top: 2rem;
  color: #000000;
  text-align: center;
  margin-bottom: 3rem;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Georgina', serif;
  color: #444;
`;

const Paragraph = styled.p`
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  font-size: 1.2rem; /* Cambia el tamaño de la letra */
  color: #333333; /* Cambia el color de la letra */
  line-height: 1.8; /* Cambia el espaciado entre líneas */
  font-family: 'Georgina', serif; 
  font-weight: 400; /* Cambia el grosor de la letra */
`;

const ContactUsForm = styled.form`
  padding: 0.5 rem;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  width: 20%;
  font-size: 1rem;
  background-color: #0AA1DD;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-left: 40%;

  &:hover {
    background-color: #095bc2;
  }
`;

const Map = styled.div`
  margin: 2rem 0;
`;

const ContactUs = () => {
  return (
    <ContactContainer style={{ marginTop: '100px' }}>
    <img className='imagenfondo'
    src="/oip.jpeg"
    alt="imagen de fondo" />
    <Title>¿Quiénes somos?</Title>
      <Paragraph>En <strong>Decoraciones Ortiz</strong>, nos dedicamos a embellecer y adecuar tus espacios con productos de la más alta calidad, adaptándolos a tus gustos y necesidades para mayor comodidad. Contamos con <b>20 años</b> de experiencia en el mercado, hemos consolidado nuestro esfuerzo y empeño en el sector de la decoración, ofreciendo soluciones innovadoras y personalizadas para hogares, oficinas, comercios y exteriores. Estamos aquí para ayudarte brindando ideas y satisfacción. Ponte en contacto con nosotros a través de cualquiera de nuestros siguientes medios:
      </Paragraph>
      <Paragraph>
      <Heading2>Nuestra Misión</Heading2>
      Nuestra misión es transformar tus espacios en ambientes acogedores, estéticamente atractivos y altamente funcionales, asegurando siempre la máxima satisfacción de nuestros clientes y usuarios, brindando una experiencia profesional completa, segura y garantizada.
      </Paragraph>
      <Paragraph>
      <Heading2>Visión y Valores</Heading2>
      Nos guiamos por valores fundamentales como la excelencia, la innovación, la estética y el compromiso con la calidad. Creemos en la importancia de un servicio al cliente excepcional, seguro y confiable, trabajando incansablemente en la meta de superar cualquier expectativa en cada producto o servicio que brindamos.
      </Paragraph>
      <Paragraph>
      <Heading2>Responsabilidad Social</Heading2>
      En <b>Decoraciones Ortiz</b>, entendemos que el éxito empresarial va de la mano con la responsabilidad social. Por eso, estamos comprometidos con prácticas sostenibles, reduciendo nuestro impacto ambiental a través del uso de materiales más ecológicos y amigables, con técnicas de producción éticas y responsables. Además, apoyamos activamente a comunidades locales, participando en iniciativas que promueven el bienestar profesional y un desarrollo social, que pueda aportar al crecimiento comercial y mejorar las oportunidades laborales de la comunidad en general. 
      </Paragraph>
      <Heading2>Contáctanos</Heading2>
      <Paragraph>
        <b>Teléfono:</b> 
        <br />
        +57 310 755 59 66
        <br />
        <br />
        <b>Dirección:</b> 
        <br />
        Calle 10 sur # 25 - 04 Barrio Sinaí, Neiva - Huila, Colombia
        <br />
        <br />
        <b>Correo Electrónico:
        <br /> 
        </b><a href="mailto:contacto.decoracionesortiz@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }} onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}> contacto.decoracionesortiz@gmail.com</a> 
        <br /> 
      </Paragraph>
      <Paragraph>
        <b>Horarios de Atención:</b>
        <br /> 
        <b>Lunes a Viernes:</b> 6:00 a.m - 12:00 m. y 2:00 p.m - 6:00 p.m. 
        <br />
        <b>Sábados:</b> 8:00 a.m - 1:00 p.m.
        <br />
      </Paragraph>
      <Paragraph>
        <b>Síguenos en nuestras redes sociales:</b>
        <br />
        <a href="https://www.facebook.com/share/19hkcs69RJ/"><FaFacebookSquare /></a> | <a href="https://twitter.com"><FaSquareXTwitter /></a> | <a href="https://www.instagram.com/pablo.emilioortiz" target="_blank" rel="noopener noreferrer"><FaSquareInstagram /></a>
      </Paragraph>
      <Paragraph>¿Necesitas más información sobre algún tipo de cortina, accesorio o servicio en particular? <b>¡ Estamos aquí !</b>, No dudes en contactarnos y preguntarnos. Podemos ayudarte a elegir tu cortina o accesorio ideal para tu hogar o espacio especial.
      </Paragraph>
      <br />
      <Paragraph><b>Cortina tras cortina, tenemos ocultas muchas cosas más para tí...  ¡ Descúbrelas !</b>
      </Paragraph>
      <button className="asesoriasButton">Asesorías</button> {/* Utiliza la clase asesoriasButton*/}
      <Map>
        {/* Integrar aqui Google Maps */}
      </Map>
      <Heading2>Realiza tu propia solicitud de usuario:</Heading2>
      <ContactUsForm>
        <Input type="text" placeholder="Nombre completo" required />
        <Input type="email" placeholder="Correo Electrónico" required />
        <Input type="tel" placeholder="Teléfono" required/>
        <Input type="text" placeholder="Asunto" required />
        <TextArea rows="4" placeholder="Escribenos aquí como podemos ayudarte..." required></TextArea>
        <Button type="submit">Enviar</Button>
      </ContactUsForm>
    </ContactContainer>
  );
}

ContactUs.propTypes = {};

export default ContactUs;
