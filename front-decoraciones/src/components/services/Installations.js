import React, { useState } from 'react';
import styled from 'styled-components';
import Rating from '../specific/Rating'; 
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
  margin-bottom: 5rem;
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
      return '#6c757d'; 
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

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const { nombre_completo, correo_electronico, telefono, direccion, motivo } = formData;
    if (!nombre_completo || !correo_electronico || !telefono || !direccion || !motivo) {
      setErrorMessage('Todos los campos son obligatorios.');
      return false;
    }
    // Validar formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo_electronico)) {
      setErrorMessage('Por favor, ingresa un correo electrónico válido.');
      return false;
    }
    // Validar formato del teléfono 
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(telefono)) {
      setErrorMessage('Por favor, ingresa un número de celular válido (10 dígitos).');
      return false;
    }
    // Validar formato de la dirección
    const addressRegex = /^[a-zA-Z0-9\s,.'#-]{3,}$/;
    if (!addressRegex.test(direccion)) {
      setErrorMessage('Por favor, ingresa una dirección válida.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      window.alert(errorMessage);
      return;
    }

    const confirm = window.confirm("¿Confirma que desea ser contactado(a) al enviar su solicitud de servicio para: (Instalación)?");
    if (!confirm) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/solicitudes', {
        tipo_solicitud: 'instalacion',
        ...formData
      });
      // si response.error existe, mostrar mensaje de error
      console.log('Solicitud enviada:', response.data);
      setSuccessMessage('Solicitud enviada exitosamente.');
      setErrorMessage('');
      window.alert('Solicitud enviada exitosamente.');
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      setErrorMessage('Hubo un error al enviar su solicitud. Por favor, inténtelo de nuevo o contacta con un asesor.');
      setSuccessMessage('');
      window.alert('Hubo un error al enviar su solicitud. Por favor, inténtelo de nuevo o contacta con un asesor.');
    }
  };

  return (
    <div>
      <img className='imagenfondo' 
      src="/oip.jpeg" 
      alt="imagen de fondo" />
      <InstallationsContainer>
        <Title>Instalaciones</Title>
        <div className="services-list">
          <Paragraph>En <b>Decoraciones Ortiz</b>, ofrecemos el mejor servicio de instalación de cortinas con accesorios de alta calidad para asegurar que cada elemento esté perfectamente colocado. Nuestros expertos garantizan una instalación completa y sin problemas, adaptándose a tus necesidades de comodidad, estilo y estética.
          </Paragraph>
          <Paragraph><b>Para solicitar el servicio de "Instalación", por favor completa el siguiente formulario con tus datos y una breve descripción de tu solicitud. Nos pondremos en contacto en la mayor brevedad de tiempo posible, para coordinar una visita y brindar la mejor solución a tus necesidades y expectativas.</b>
          </Paragraph>
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <ContactForm onSubmit={handleSubmit}>
            <Input type="text" name="nombre_completo" placeholder="Nombre completo" value={formData.nombre_completo} onChange={handleChange} required />
            <Input type="email" name="correo_electronico" placeholder="Correo Electrónico" value={formData.correo_electronico} onChange={handleChange} required />
            <Input type="tel" name="telefono" placeholder="celular" value={formData.telefono} onChange={handleChange} required />
            <Input type="text" name="direccion" placeholder="Dirección" value={formData.direccion} onChange={handleChange} required />
            <TextArea rows="4" name="motivo" placeholder="Describe aquí indicaciones de la instalación que deseas solicitar." value={formData.motivo} onChange={handleChange} required />
            <ServicesButton variant="primary" type="submit"><b>Solicitar Instalación</b></ServicesButton>
          </ContactForm>
          <Paragraph>Con el objetivo de brindar un servicio excelente y profesional a todos sus usuarios, en <strong>Decoraciones Ortiz</strong>, buscamos cada día ser mejores en beneficio de nuestros clientes. Por ende, te invitamos a opinar y calificar nuestros servicios y productos, junto con los profesionales, quienes dedican su atención y conocimientos para adaptar y solucionar con precisión todas tus exigencias y requerimientos.
          </Paragraph>
          <Rating />
        </div>
      </InstallationsContainer>
    </div>
  );
}

export default Installations;