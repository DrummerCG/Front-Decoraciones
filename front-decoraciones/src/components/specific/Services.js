import React from "react";
import styled from "styled-components";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos //
import '../../styles/specific/Services.css'; //Imagen de fondo //
import Rating from './Rating'; // Calificación //

const ServicesContainer = styled.div`
  margin-top: 100px;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const Heading1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Heading2 = styled.h2`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  color: #444;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`;

const ServicesButton = styled(Button)`
  width: 100%;
  max-width: 200px;
  margin: 0.5rem 0;
  background-color: ${props => getBackgroundColor(props.variant)};
  border: 3px solid ${props => getBackgroundColor(props.variant)};
  color: white;
  cursor: pointer;

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

const Services = () => {
  return (
    <div>
      <img className='imagenfondo' src="/oip.jpeg" alt="imagen de fondo" />
      <ServicesContainer>
        <Heading1>¿Necesitas más?</Heading1>
        <Paragraph>Somos los que pensamos en la comodidad y seguridad para tu servicio. Selecciona una de las opciones en las cuales deseas realizar una solicitud.</Paragraph>
        <div className="services-list">
          <Heading2>Instalaciones</Heading2>
          <Paragraph>En Decoraciones Ortiz, ofrecemos servicios de instalación de cortinas y accesorios de alta calidad para asegurar que cada elemento esté perfectamente colocado. Nuestros expertos garantizan una instalación sin problemas, adaptándose a tus necesidades y estilo.</Paragraph>
          <ServicesButton variant="primary">Instalaciones</ServicesButton>
          <Rating />

          <Heading2>Mantenimiento</Heading2>
          <Paragraph>El mantenimiento es clave para prolongar la vida útil de tus cortinas y accesorios. Ofrecemos planes de mantenimiento periódicos para asegurar que todo esté en óptimas condiciones, evitando problemas futuros y asegurando una funcionalidad continua.</Paragraph>
          <ServicesButton variant="success">Mantenimiento</ServicesButton>
          <Rating />
          
          <Heading2>Reparación</Heading2>
          <Paragraph>¿Tu cortina necesita reparaciones? No te preocupes, nuestros técnicos especializados están disponibles para reparar cualquier desperfecto, asegurando que tus cortinas luzcan como nuevas y funcionen perfectamente.</Paragraph>
          <ServicesButton variant="warning">Reparación</ServicesButton>
          <Rating />
          
          <Heading2>PQRS</Heading2>
          <Paragraph>A través de nuestro sistema de PQRS (Peticiones, Quejas, Reclamos y Sugerencias), puedes comunicarte con nosotros para cualquier tipo de solicitud o comentario. Estamos comprometidos a atender tus necesidades y mejorar continuamente nuestros servicios.</Paragraph>
          <ServicesButton variant="danger">PQRS</ServicesButton>
          <Rating />
          
          <Heading2>Garantías</Heading2>
          <Paragraph>En Decoraciones Ortiz, respaldamos nuestros productos y servicios con garantías sólidas. Si tienes algún problema con nuestras cortinas o accesorios, estamos aquí para ofrecerte el soporte y las soluciones necesarias.</Paragraph>
          <ServicesButton variant="info">Garantías</ServicesButton>
          <Rating />

          <Heading2>Comentarios</Heading2>
          <Paragraph>Tu opinión es muy importante para nosotros. Si tienes algún comentario o sugerencia acerca de nuestros productos o servicios, por favor háznoslo saber. Nos ayudará a mejorar y ofrecerte un mejor servicio.</Paragraph>
          <ServicesButton variant="secondary">Comentarios</ServicesButton>
          <Rating />
        </div>
        <Heading2>Servicios Adicionales</Heading2>
        <Paragraph>Brindamos experiencias y soluciones en cualquier lugar o espacio, asegurando la comodidad y satisfacción de nuestros clientes.</Paragraph>
      </ServicesContainer>
    </div>
  );
}

Services.protoTypes = {};

export default Services;
