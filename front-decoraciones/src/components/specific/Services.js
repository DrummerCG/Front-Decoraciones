import React from "react";
import styled from "styled-components";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/specific/Services.css';

const StyledButton = styled(Button)`
  background-color: ${props => getBackgroundColor(props.variant)}; /* Fondo según el variant */
  border: 3px solid ${props => getBackgroundColor(props.variant)}; /* Borde según el variant */
  color: white;
  cursor: pointer;

  &:hover {
    background-color: ${props => lightenColor(props.variant)}; /* Color de fondo al pasar el mouse */
    border: 3px solid ${props => getBackgroundColor(props.variant)}; /* Borde del mismo color al pasar el mouse */
    color: black; /* Color del texto al pasar el mouse */
  }

  &:active {
    background-color: ${props => getBackgroundColor(props.variant)}; /* Fondo según el variant */
    border: 3px solid ${props => getBackgroundColor(props.variant)}; /* Borde según el variant */
    color: white; /* Mantener color blanco del texto */
  }
`;

function getBackgroundColor(variant) {
  switch (variant) {
    case 'primary':
      return '#007bff'; // Azul para primary
    case 'success':
      return '#28a745'; // Verde para success
    case 'warning':
      return '#FF6000'; // Naranja para warning
    case 'danger':
      return '#dc3545'; // Rojo para danger
    case 'info':
      return '#17a2b8'; // Cian para info
    default:
      return '#3C3D37'; // Fondo predeterminado
  }
}

function lightenColor(variant) {
  switch (variant) {
    case 'primary':
      return '#85b5ff'; // Azul claro para primary
    case 'success':
      return '#7fcf8a'; // Verde claro para success
    case 'warning':
      return '#FFB87F'; // Naranja claro para warning
    case 'danger':
      return '#f28d8d'; // Rojo claro para danger
    case 'info':
      return '#a6d8e4'; // Cian claro para info
    default:
      return '#8C8C8C'; // Fondo claro predeterminado
  }
}

const Services = () => {
  return (
    <div>
      <img className='imagenfondo' src="/oip.jpeg" alt="imagen de fondo" />
      <div className="ServicesContainer">
        <h1 className="Empresa">¿Necesitas más?</h1>
        <h5 className="Descrip">Somos los que pensamos en la comodidad y seguridad para tu servicio. Selecciona una de las opciones en las cuales deseas realizar una solicitud.</h5>
        <div id='services-buttons' className="row mb-3">
          <StyledButton variant="primary" className="m-2">Instalaciones</StyledButton>
          <StyledButton variant="success" className="m-2">Mantenimiento</StyledButton>
          <StyledButton variant="warning" className="m-2">Reparación</StyledButton>
          <StyledButton variant="danger" className="m-2">PQRS</StyledButton>
          <StyledButton variant="info" className="m-2">Garantías</StyledButton>
        </div>
        <h6 className="Descrip">Brindamos experiencias y soluciones en cualquier lugar o espacio.</h6>
      </div>
    </div>
  );
}

Services.protoTypes = {};

export default Services;
