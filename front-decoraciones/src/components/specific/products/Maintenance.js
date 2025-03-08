import React from 'react';
import styled from 'styled-components';
import Rating from '../Rating'; 

const MaintenanceContainer = styled.div`
  display: grid;
  width: 70%;
  place-items: center;
  margin-top: 100px;
  margin-left: 15%;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const Heading1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const Paragraph = styled.p`
  margin-top: 2rem;
  margin-bottom: 3rem;
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`;

const ContactForm = styled.form`
  padding: 0.5 rem;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 20%;
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

const ServicesButton = styled.button`
 padding: 0.5rem;
  width: 40%;
  font-size: 1rem;
  justify-content: center;
  background-color: ${props => getBackgroundColor(props.variant)};
  border: 3px solid ${props => getBackgroundColor(props.variant)};
  color: white;
  border-radius: 4px;
  font-weight: semibold;
  cursor: pointer;
  margin-top: 2rem;
  margin-bottom: 4rem;
  margin-left: 30%;

  &:hover {
    background-color: ${props => lightenColor(props.variant)};
    border: 3px solid ${props => getBackgroundColor(props.variant)};
    color: black;
  }

  &:active {
    background-color: ${props => getBackgroundColor(props.variant)};
    border: 3px solid ${props => getBackgroundColor(props.variant)};
    color: white;
  }
`;

function getBackgroundColor(variant) {
  switch (variant) {
    case 'primary':
      return '#007bff';
    case 'success':
      return '#28a745';
    case 'warning':
      return '#FF6000';
    case 'danger':
      return '#dc3545';
    case 'info':
      return '#17a2b8';
    case 'secondary':
      return '#6c757d'; // Gris para secondary (comentarios)
    default:
      return '#3C3D37';
  }
}

function lightenColor(variant) {
  switch (variant) {
    case 'primary':
      return '#85b5ff';
    case 'success':
      return '#7fcf8a';
    case 'warning':
      return '#FFB87F';
    case 'danger':
      return '#f28d8d';
    case 'info':
      return '#a6d8e4';
    case 'secondary':
      return '#b1b1b1'; // Gris claro para secondary (comentarios)
    default:
      return '#8C8C8C';
  }
}

const Maintenance = () => {
  return (
    <div>
      <img className='imagenfondo' 
      src="/oip.jpeg" 
      alt="imagen de fondo" />
      <MaintenanceContainer>
        <Heading1>Mantenimiento</Heading1>
        <div className="services-list">
          <Paragraph><strong>En Decoraciones Ortiz, ofrecemos el mejor y experimentado servicio de Mantenimiento en cortinas o accesorios, con una mano de obra de alta calidad para asegurar que cada elemento esté perfectamente colocado y asegurado. Nuestros expertos garantizan un Mantenimiento completo y sin problemas, adaptado a tus necesidades de comodidad, estilo y estética.</strong>
          </Paragraph>
          El mantenimiento es clave para prolongar la vida útil de tus cortinas y accesorios. Ofrecemos planes de mantenimiento periódicos para asegurar que todo esté en óptimas condiciones, evitando problemas futuros y asegurando una funcionalidad continua.
          <Paragraph>Para solicitar el servicio de Mantenimiento, por favor completa el siguiente formulario con tus datos y una breve descripción de tu solicitud. Nos pondremos en contacto en la mayor brevedad de tiempo posible, para coordinar una visita y brindar la mejor solución a tus necesidades y expectativas.
          </Paragraph>
          <ContactForm>
            <Input type="text" placeholder="Nombre completo" required />
            <Input type="email" placeholder="Correo Electrónico" required />
            <Input type="tel" placeholder="Teléfono" required />
            <Input type="text" placeholder="Dirección" required />
            <TextArea rows="4" placeholder="Describe aquí indicaciones del mantenimiento que deseas solicitar." >
            </TextArea>
            <ServicesButton variant="success">Solicitar Mantenimiento</ServicesButton>
          </ContactForm>
          <Paragraph>Con el objetivo de brindar un servicio excelente y profesional a todos sus usuarios, en <strong>Decoraciones Ortiz</strong>, buscamos cada día ser mejores en beneficio de nuestros clientes. 
          <br />
          Por ende, te invitamos a opinar y calificar nuestros servicios y accesorios, junto con los profesionales, quienes dedican su atención y conocimientos para adaptar y solucionar con precisión todas tus exigencias y requerimientos.
          </Paragraph>
          <Rating />
        </div>
      </MaintenanceContainer>
    </div>
  );
}

export default Maintenance;