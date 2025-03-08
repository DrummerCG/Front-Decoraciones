import React, { useState } from 'react';
import styled from 'styled-components';
import Rating from '../Rating'; 
import axios from 'axios';

const InstallationsContainer = styled.div`
  display: grid;
  width: 70%;
  place-items: center;
  margin-top: 100px;
  margin-left: 15%;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-family: 'Roboto', 'Arial', 'Helvetica', 'sans-serif';
  font-size: 1.5rem;
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
      return '#b1b1b1'; 
    default:
      return '#8C8C8C';
  }
}

const Installations = () => {
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
        tipo_solicitud: 'instalacion',
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
      <InstallationsContainer>
        <Heading1>Instalaciones</Heading1>
        <div className="services-list">
          <Paragraph><strong>En Decoraciones Ortiz, ofrecemos el mejor servicio de instalación de cortinas con accesorios de alta calidad para asegurar que cada elemento esté perfectamente colocado. Nuestros expertos garantizan una instalación completa y sin problemas, adaptándose a tus necesidades de comodidad, estilo y estética.</strong>
          </Paragraph>
          <Paragraph>Para solicitar el servicio de instalación, por favor completa el siguiente formulario con tus datos y una breve descripción de tu solicitud. Nos pondremos en contacto en la mayor brevedad de tiempo posible, para coordinar una visita y brindar la mejor solución a tus necesidades y expectativas.
          </Paragraph>
          <ContactForm onSubmit={handleSubmit}>
            <Input type="text" name="nombre_completo" placeholder="Nombre completo" value={formData.nombre_completo} onChange={handleChange} required />
            <Input type="email" name="correo_electronico" placeholder="Correo Electrónico" value={formData.correo_electronico} onChange={handleChange} required />
            <Input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required />
            <Input type="text" name="direccion" placeholder="Dirección" value={formData.direccion} onChange={handleChange} required />
            <TextArea rows="4" name="motivo" placeholder="Describe aquí indicaciones de la instalación que deseas solicitar." value={formData.motivo} onChange={handleChange} required />
            <ServicesButton variant="primary" type="submit"><b>Solicitar Instalación</b></ServicesButton>
          </ContactForm>
          <Paragraph>Con el objetivo de brindar un servicio excelente y profesional a todos sus usuarios, en <strong>Decoraciones Ortiz</strong>, buscamos cada día ser mejores en beneficio de nuestros clientes. Por ende, te invitamos a opinar y calificar nuestros servicios y accesorios, junto con los profesionales, quienes dedican su atención y conocimientos para adaptar y solucionar con precisión todas tus exigencias y requerimientos.
          </Paragraph>
          <Rating />
        </div>
      </InstallationsContainer>
    </div>
  );
}

export default Installations;