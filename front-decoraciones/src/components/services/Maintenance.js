import React, { useState } from 'react';
import styled from 'styled-components';
import Rating from '../specific/Rating'; 
import axios from 'axios'; 

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
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5rem;
`;

  const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-top: 2rem;
  margin-bottom: 3rem;
  font-weight: bold;
  font-family: 'Roboto', serif;
`;

const Paragraph = styled.p`
  margin-top: 3rem;
  margin-bottom: 2.5rem;
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  font-family: 'Open Sans', sans-serif;
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
  width: 50%;
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
  margin-left: 25%;

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
  const [formData, setFormData] = useState({
    nombre_completo: '',
    correo_electronico: '',
    telefono: '',
    direccion: '',
    motivo: ''
  });
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form validation here if needed

    try {
      const response = await axios.post('http://localhost:3001/solicitudes', {
        tipo_solicitud: 'mantenimiento',
        ...formData
      });
      console.log('Solicitud enviada:', response.data);
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div>
      <img className='imagenfondo' 
      src="/oip.jpeg" 
      alt="imagen de fondo" />
      <MaintenanceContainer>
        <Title>Mantenimiento</Title>
        <div className="services-list">
          <Paragraph>En <b>Decoraciones Ortiz</b>, ofrecemos el mejor y experimentado servicio de Mantenimiento en cortinas o accesorios, con una mano de obra de alta calidad para asegurar que cada elemento esté perfectamente colocado y asegurado. Nuestros expertos garantizan un Mantenimiento completo y sin problemas, adaptado a tus necesidades de comodidad, estilo y estética.
          </Paragraph>
          <Paragraph>El mantenimiento es clave para prolongar la vida útil de tus cortinas y accesorios. Ofrecemos planes de mantenimiento periódicos para asegurar que todo esté en óptimas condiciones, evitando problemas futuros y asegurando una funcionalidad continua y de larga duración.
          </Paragraph>
          <Paragraph><b>Para solicitar el servicio de "Mantenimiento", por favor completa el siguiente formulario con tus datos y una breve descripción de tu solicitud. Nos pondremos en contacto en la mayor brevedad de tiempo posible, para coordinar una visita y brindar la mejor solución a tus necesidades y expectativas.</b>
          </Paragraph>
          <ContactForm onSubmit={handleSubmit}>
            <Input type="text" name="nombre_completo" placeholder="Nombre completo" value={formData.nombre_completo} onChange={handleChange} required />
            <Input type="email" name="correo_electronico" placeholder="Correo Electrónico" value={formData.correo_electronico} onChange={handleChange} required />
            <Input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required />
            <Input type="text" name="direccion" placeholder="Dirección" value={formData.direccion} onChange={handleChange} required />
            <TextArea rows="4" name="motivo" placeholder="Describe aquí el mantenimiento que deseas solicitar." value={formData.motivo} onChange={handleChange} required />
            <ServicesButton variant="success" type="submit"><b>Solicitar Mantenimiento</b></ServicesButton>
          </ContactForm>
          <Paragraph>Con el objetivo de brindar un servicio excelente y profesional a todos sus usuarios, en <strong>Decoraciones Ortiz</strong>, buscamos cada día ser mejores en beneficio de nuestros clientes. Por ende, te invitamos a opinar y calificar nuestros servicios y productos, junto con los profesionales, quienes dedican su atención y conocimientos para adaptar y solucionar con precisión todas tus exigencias y requerimientos.
          </Paragraph>
          <Rating />
        </div>
      </MaintenanceContainer>
    </div>
  );
}

export default Maintenance;