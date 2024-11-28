import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  border: 3px solid #FF6000; /* Borde de 3 puntos con el color naranja */
  border-radius: 5px;
  background-color: ${props => props.primary ? '#FF6000' : '#3C3D37'}; /* Fondo naranja o gris */
  color: white;
  cursor: pointer;
  width: 140px; /* Ancho fijo para igualar el tamaño */
  height: 45px; /* Altura fija para igualar el tamaño */

  &:hover {
    background-color: #B7B7B7; /* Color de fondo al pasar el mouse */
    color: black; /* Color del texto al pasar el mouse */
  }
`;

const UserOptions = () => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/sign-in');
  };

  if (isLogged) {
    return (
      <div className='d-flex justify-content-center align-items-center' style={{ marginRight: '10px' }}>
        <StyledButton
          className='me-3'
          id='app-sign-in-button'
          primary
        >
          Sign Out
        </StyledButton>
      </div>
    );
  }

  return (
    <div className='d-flex justify-content-center align-items-center' style={{ marginRight: '10px' }}>
      <StyledButton
        className='me-3'
        id='app-sign-in-button'
        onClick={handleSignInClick}
      >
        Iniciar Sesión
      </StyledButton>
      <StyledButton
        className='me-3'
        id='app-sign-up-button'
        onClick={handleRegisterClick}
      >
        Regístrate
      </StyledButton>
    </div>
  );
};

export default UserOptions;
