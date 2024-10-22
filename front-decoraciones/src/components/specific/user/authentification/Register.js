import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  box-sizing: border-box;
`;

const Card = styled.div`
  border: 3px solid #0E76FF;
  border-radius: 8px;
  padding: 1rem;
  width: 100%;
  max-width: 550px; /* Aumentamos el ancho máximo en 10 puntos */
  height: calc(100vh - 50px); /* Ajustamos la altura */
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid #0E76FF;
  padding-bottom: 1rem;
`;

const CardBody = styled.div`
  padding-top: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FormGroup = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const FormControl = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ff980e;
  border-radius: 4px;
  margin-bottom: 0.5rem;
`;

const ButtonPrimary = styled.button`
  background-color: #0E76FF;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 0.5rem;

  &:hover {
    background-color: #095bc2;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading5 = styled.h5`
  color: #FF980E;
  margin-bottom: 0.5rem;
`;

const Heading2 = styled.h2`
  margin: 0;
`;

const LinkStyled = styled(Link)`
  color: black;
  text-decoration: none;
  margin-top: 0.5rem;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  input {
    margin-right: 0.3rem; /* Separación de 3 puntos */
  }
`;

const Register = () => {
  return (
    <RegisterContainer>
      <Card>
        <CardHeader>
          <Heading5>Hola, Bienvenido(a)</Heading5>
          <Heading2>Regístrate...</Heading2>
        </CardHeader>
        <CardBody>
          <form>
            <FormGroup>
              <label htmlFor="name">Nombre(s) y Apellidos*</label>
              <FormControl type="text" id="name" placeholder="Introduce tu nombre" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="id">Documento / ID*</label>
              <FormControl type="text" id="id" placeholder="Digita tu número de identidad" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="phone">Teléfono*</label>
              <FormControl type="tel" id="phone" placeholder="Digita tu número telefónico" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="address">Dirección / Barrio*</label>
              <FormControl type="text" id="address" placeholder="Digita tu ubicación local" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="city">Ciudad / Departamento*</label>
              <FormControl type="text" id="city" placeholder="Digita tu ciudad y departamento" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email*</label>
              <FormControl type="email" id="email" placeholder="digitaaquí@tucorreo.com" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">Contraseña*</label>
              <FormControl type="password" id="password" placeholder="Digita tu contraseña" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="confirmPassword">Confirmar Contraseña*</label>
              <FormControl type="password" id="confirmPassword" placeholder="Confirma tu contraseña" />
            </FormGroup>
            <CheckBoxWrapper>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">Acepto los Términos y condiciones</label>
            </CheckBoxWrapper>
            <ActionGroup>
              <ButtonPrimary type="submit">
                Crear cuenta
              </ButtonPrimary>
              <LinkStyled to="/sign-in">
                ¿Ya tienes cuenta? Inicia sesión
              </LinkStyled>
            </ActionGroup>
          </form>
        </CardBody>
      </Card>
    </RegisterContainer>
  );
};

export default Register;