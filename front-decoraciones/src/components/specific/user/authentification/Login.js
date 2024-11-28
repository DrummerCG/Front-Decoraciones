import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../../../../styles/styles.css'; // Importa el archivo CSS con la imagen de fondo

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto; /* Cambiado de 100vh a auto */
  margin-bottom: 2rem; /* Aumentado para margen inferior */
  margin-top: 7rem; /* Ajustado para margen superior */
`;

const Card = styled.div`
  border: 5px solid #0AA1DD;
  border-radius: 8px;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 5px solid #0AA1DD;
  padding-bottom: 1rem;
`;

const CardBody = styled.div`
  padding-top: 1rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const FormControl = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #FF6000;
  border-radius: 3px;
  margin-bottom: 0.5rem;
`;

const ButtonPrimary = styled.button`
  background-color: #0AA1DD;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 1rem;

  &:hover {
    background-color: #095bc2;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkStyled = styled(Link)`
  color: #3C3D37;
  text-decoration: none;
  margin-top: -2px;
`;

const CheckGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Heading5 = styled.h5`
  color: #FF6000; /* Color naranja */
  margin-bottom: 0.5rem;
`;

const Heading2 = styled.h2`
  margin-bottom: 1rem;
`;

const ImageStyled = styled.img`
  max-width: 70%; /* Reducir el tamaño a 70% */
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3px;
`;

const Login = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <img
        className='imagenfondo'
        src="/oip.jpeg"
        alt="imagen de fondo"
      />
      <ImageStyled
        className='inisesion'
        src="/inisesion.jpg"
        alt="inisesion"
      />
      <LoginContainer>
        <Card>
          <CardHeader>
            <Heading5><strong>Hola, Bienvenido(a)</strong></Heading5>
            <Heading2>Inicia Sesión...</Heading2>
            <h6>Ingresa tu correo electrónico y contraseña. </h6>
          </CardHeader>
          <CardBody>
            <form>
              <FormGroup>
                <label htmlFor="formBasicEmail">Correo electrónico</label>
                <FormControl type="email" id="formBasicEmail" placeholder="digitaaquí@tucorreo.com" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="formBasicPassword">Contraseña</label>
                <FormControl type="password" id="formBasicPassword" placeholder="digita tu contraseña" />
              </FormGroup>
              <CheckGroup>
                <CheckBoxWrapper>
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe" style={{ marginLeft: '0.5rem' }}>Recordarme.</label>
                </CheckBoxWrapper>
                <LinkStyled to="/password-recover">
                  <strong>¿Olvidaste tu contraseña?</strong>
                </LinkStyled>
              </CheckGroup>
              <ActionGroup>
                <ButtonPrimary type="submit">
                  Iniciar Sesión
                </ButtonPrimary>
                <LinkStyled to="/sign-in">
                  ¿No tienes cuenta? <strong>Regístrate</strong>
                </LinkStyled>
              </ActionGroup>
            </form>
          </CardBody>
        </Card>
      </LoginContainer>
    </div>
  );
};

export default Login;
