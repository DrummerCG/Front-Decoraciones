import React from 'react';
import styled from 'styled-components';
import Rating from '../Rating'; 

const RepairsContainer = styled.div`
  display: grid;
  width: 70%;
  place-items: center;
  margin-top: 100px;
  margin-left: 15%;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-family: 'Roboto', sans-serif;
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
  font-weight: semibold;
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
  margin-bottom: 5rem;
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

const Repairs = () => {
  return (
    <div>
      <img className='imagenfondo' 
      src="/oip.jpeg" 
      alt="imagen de fondo" />
      <RepairsContainer>
        <Heading1>Reparaciones</Heading1>
        <div className="services-list">
          <Paragraph><strong>En DECORACIONES ORTIZ, ofrecemos el mejor servicio de reparación de cortinas o accesorios de alta calidad para asegurar que cada elemento esté perfectamente colocado. Nuestros expertos garantizan una reparación completa y sin problemas, adaptándose a tus necesidades de comodidad, estilo y estética.</strong>
          </Paragraph>
          <Paragraph>¿Tu cortina necesita reparaciones? No te preocupes, nuestros técnicos especializados están disponibles para reparar cualquier desperfecto, asegurando que tus cortinas luzcan como nuevas y funcionen perfectamente.</Paragraph>
          <Paragraph>Para solicitar el servicio de reparación, por favor completa el siguiente formulario con tus datos y una breve descripción de tu solicitud. Nos pondremos en contacto en la mayor brevedad de tiempo posible, para coordinar una visita y brindar la mejor solución a tus necesidades y expectativas.
          </Paragraph>
          <ContactForm>
            <Input type="text" placeholder="Nombre completo" required />
            <Input type="email" placeholder="Correo Electrónico" required />
            <Input type="tel" placeholder="Teléfono" required />
            <Input type="text" placeholder="Dirección" required />
            <TextArea rows="4" placeholder="Describe aquí indicaciones de la reparación que deseas solicitar." required>
            </TextArea>
            <ServicesButton variant="warning">Solicitar Reparación</ServicesButton>
          </ContactForm>
          <Paragraph>Con el objetivo de brindar un servicio excelente y profesional a todos sus usuarios, en <strong>Decoraciones Ortiz</strong>, buscamos cada día ser mejores en beneficio de nuestros clientes. Por ende, te invitamos a opinar y calificar nuestros servicios y accesorios, junto con los profesionales, quienes dedican su atención y conocimientos para adaptar y solucionar con precisión todas tus exigencias y requerimientos.
          </Paragraph>
          <Rating />
        </div>
      </RepairsContainer>
    </div>
  );
}

export default Repairs;