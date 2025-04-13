import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledDropdownButton = styled(DropdownButton)`
  .dropdown-toggle,
  .btn {
    background-color: #3C3D37; /* Fondo gris */
    border-radius: 5px;
    color: white; /* Color del texto */
    cursor: pointer;
    width: 140px; /* Ancho reducido en un 30% */
    height: 45px; /* Altura fija para igualar el tamaño */
    font-family: 'Arial', sans-serif; /* Tipografía adecuada */
    font-size: 16px; /* Tamaño de la fuente */
    margin-left: auto;
    margin-right: auto;
    display: block;
    text-align: center; /* Centrar el texto */

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
    font-family: 'Arial', sans-serif; /* Tipografía adecuada */
    font-size: 16px; /* Tamaño de la fuente */
    width: 140px; /* Ancho reducido en un 30% */
    text-align: center; /* Centrar el texto */
    margin-left: auto;
    margin-right: auto;
  }

  .dropdown-item {
    color: white;
    text-align: center; /* Centrar el texto */
    height: 30px; /* Altura fija para los elementos del menú */
    line-height: 30px; /* Alineación vertical del texto */
    cursor: pointer; /* Cursor pointer para hacerlos más interactivos */

    &:hover {
      background-color: #B7B7B7; /* Color de fondo al pasar el mouse */
      color: black; /* Color del texto al pasar el mouse */
    }
  }

  .dropdown-submenu {
    position: relative;
  }

  .dropdown-submenu .dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -6px;
    margin-left: 0;
    background-color: #3C3D37; /* Fondo del submenú */
    font-family: 'Arial', sans-serif; /* Tipografía adecuada */
    font-size: 16px; /* Tamaño de la fuente */
    width: 140px; /* Ancho reducido en un 30% */
    text-align: center; /* Centrar el texto */
  }

  .dropdown-submenu .dropdown-item {
    color: white;
    text-align: center; /* Centrar el texto */
    height: 30px; /* Altura fija para los elementos del submenú */
    line-height: 30px; /* Alineación vertical del texto */
    cursor: pointer; /* Cursor pointer para hacerlos más interactivos */

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
      <Dropdown className="dropdown-submenu">
        <Dropdown.Toggle as="a" className="dropdown-item" href="#">Autenticación</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="1" onClick={() => navigate('/login')}>Iniciar Sesión</Dropdown.Item>
          <Dropdown.Item eventKey="2" onClick={() => navigate('/sign-in')}>Regístrate</Dropdown.Item>
          <Dropdown.Item eventKey="3" onClick={() => navigate('/password-recover')}>Contraseña</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown.Divider />
      <Dropdown className="dropdown-submenu">
        <Dropdown.Toggle as="a" className="dropdown-item" href="#">Stock</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="4" onClick={() => navigate('/stock')}>Inventario</Dropdown.Item>
          <Dropdown.Item eventKey="5" onClick={() => navigate('/sign-in')}>Modificar</Dropdown.Item>
          <Dropdown.Item eventKey="6" onClick={() => navigate('login')}>Entrantes</Dropdown.Item>
          <Dropdown.Item eventKey="7" onClick={() => navigate('/sign-in')}>Salientes</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown.Divider />
      <Dropdown className="dropdown-submenu">
        <Dropdown.Toggle as="a" className="dropdown-item" href="#">Pedidos</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="8" onClick={() => navigate('/orders')}>Confirmados</Dropdown.Item>
          <Dropdown.Item eventKey="9" onClick={() => navigate('/sign-in')}>Cancelados</Dropdown.Item>
          <Dropdown.Item eventKey="10" onClick={() => navigate('/login')}>Envíos</Dropdown.Item>
          <Dropdown.Item eventKey="11" onClick={() => navigate('/sign-in')}>Pendientes</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown.Divider />
      <Dropdown className="dropdown-submenu">
        <Dropdown.Toggle as="a" className="dropdown-item" href="#">Facturación</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="12" onClick={() => navigate('/facturacion/nueva')}>Nueva</Dropdown.Item>
          <Dropdown.Item eventKey="13" onClick={() => navigate('/facturacion/buscar')}>Buscar</Dropdown.Item>
          <Dropdown.Item eventKey="14" onClick={() => navigate('/facturacion/editar')}>Editar</Dropdown.Item>
          <Dropdown.Item eventKey="15" onClick={() => navigate('/facturacion/eliminar')}>Eliminar</Dropdown.Item>
          <Dropdown.Item eventKey="16" onClick={() => navigate('/facturacion/imprimir')}>Imprimir</Dropdown.Item>
          <Dropdown.Item eventKey="17" onClick={() => navigate('/facturacion/guardar')}>Guardar</Dropdown.Item>
          <Dropdown.Item eventKey="18" onClick={() => navigate('/facturacion/pagos')}>Pagos</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown.Divider />
      <Dropdown className="dropdown-submenu">
        <Dropdown.Toggle as="a" className="dropdown-item" href="#">Usuarios</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="19" onClick={() => navigate('/users/nuevo')}>Nuevo</Dropdown.Item>
          <Dropdown.Item eventKey="20" onClick={() => navigate('/users/editar/123')}>Editar</Dropdown.Item>          
          <Dropdown.Item eventKey="21" onClick={() => navigate('/users/buscar')}>Buscar</Dropdown.Item>
          <Dropdown.Item eventKey="22" onClick={() => navigate('/users/bloqueos')}>Bloqueos</Dropdown.Item>
          <Dropdown.Item eventKey="23" onClick={() => navigate('/users/lista')}>Listados</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown.Divider />
      <Dropdown className="dropdown-submenu">
        <Dropdown.Toggle as="a" className="dropdown-item" href="#">Notificaciones</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="24" onClick={() => navigate('/users')}>Novedades</Dropdown.Item>
          <Dropdown.Item eventKey="25" onClick={() => navigate('/requests')}>Solicitudes</Dropdown.Item>
          <Dropdown.Item eventKey="26" onClick={() => navigate('/login')}>Informes</Dropdown.Item>
          <Dropdown.Item eventKey="27" onClick={() => navigate('/sign-in')}>Garantías</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="28" onClick={() => navigate('/logout')}>Salir</Dropdown.Item>
    </StyledDropdownButton>
  );
}

export default BasicButtonExample;