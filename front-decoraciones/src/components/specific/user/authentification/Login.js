import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const Card = styled.div`
  border: 3px solid #0E76FF;
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
  border-bottom: 3px solid #0E76FF;
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
  border: 1px solid #ff980e;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const ButtonPrimary = styled.button`
  background-color: #0E76FF;
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
  color: black;
  text-decoration: none;
  margin-top: 1rem;
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
  color: #FF980E; /* Color naranja */
  margin-bottom: 0.5rem;
`;

const Heading2 = styled.h2`
  margin: 0;
`;

const Login = () => {
  return (
    <div><img className='imagenfondo'
      src="/oip.jpeg"
      alt="imagen de fondo" />
    <LoginContainer>
      <Card>
        <CardHeader>
          <Heading5>Hola, Bienvenido(a)</Heading5>
          <Heading2>Inicia Sesión...</Heading2>
          <button className="close-button">&times;</button>
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
                <label htmlFor="rememberMe" style={{ marginLeft: '0.5rem' }}>Recordarme</label>
              </CheckBoxWrapper>
              <LinkStyled to="/password-recover">
                ¿Olvidaste tu contraseña?
              </LinkStyled>
            </CheckGroup>
            <ActionGroup>
              <ButtonPrimary type="submit">
                Iniciar Sesión
              </ButtonPrimary>
              <LinkStyled to="/sign-in">
                ¿No tienes cuenta? Regístrate
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