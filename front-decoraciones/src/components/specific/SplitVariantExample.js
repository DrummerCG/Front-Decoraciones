import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledDropdownButton = styled(DropdownButton)`
  .dropdown-toggle,
  .btn {
    background-color: #3C3D37; /* Fondo gris */
    border: 3px solid #FF6000; /* Borde de 3 puntos con el color naranja */
    border-radius: 5px;
    color: white; /* Color del texto */
    cursor: pointer;
    width: 140px; /* Ancho fijo para igualar el tamaño */
    height: 45px; /* Altura fija para igualar el tamaño */

    &:hover {
      background-color: #B7B7B7; /* Color de fondo al pasar el mouse */
      color: black; /* Color del texto al pasar el mouse */
    }
  }

  .dropdown-toggle::after {
    color: white; /* Color de la flecha del desplegable */
  }

  .dropdown-menu {
    background-color: #3C3D37; /* Fondo del menú desplegable */
    border: 5px solid #FF6000; /* Bordes de 3 puntos de grosor en color naranja */
  }

  .dropdown-item {
    color: white;

    &:hover {
      background-color: #B7B7B7; /* Color de fondo al pasar el mouse */
      color: black; /* Color del texto al pasar el mouse */
    }
  }
`;

function BasicButtonExample() {
  const navigate = useNavigate();

  return (
    <StyledDropdownButton id="dropdown-basic-button" title="Menu">
      <Dropdown.Item eventKey="1" onClick={() => navigate('/login')}>Iniciar Sesión</Dropdown.Item>
      <Dropdown.Item eventKey="2" onClick={() => navigate('/sign-in')}>Regístrate</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="3" onClick={() => navigate('/stock')}>Stock</Dropdown.Item>
      <Dropdown.Item eventKey="4" onClick={() => navigate('/orders')}>Pedidos</Dropdown.Item>
      <Dropdown.Item eventKey="5" onClick={() => navigate('/users')}>Usuarios</Dropdown.Item>
      <Dropdown.Item eventKey="6" onClick={() => navigate('/notifications')}>Notificaciones</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="7" onClick={() => navigate('/logout')}>Salir</Dropdown.Item>
    </StyledDropdownButton>
  );
}

export default BasicButtonExample;
