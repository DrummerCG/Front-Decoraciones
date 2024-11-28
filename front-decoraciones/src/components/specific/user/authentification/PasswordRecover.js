import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../../../../styles/styles.css'; // Importa el archivo CSS con la imagen de fondo

const PasswordRecoverContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  margin-top: 7rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background: #fff
  border: 5px solid #0AA1DD;
  border-radius: 8px;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  border-radius: 4px;
  margin-bottom: 1rem;
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

const Heading5 = styled.h5`
  color: #FF6000; /* Color naranja */
  margin-bottom: 0.5rem;
`;

const Heading2 = styled.h2`
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 0.5rem;
`;

const PasswordRecover = () => {
  return (
    <div>
      <img className='imagenfondo' 
           src="/oip.jpeg"
           alt="imagen de fondo"/>
      <PasswordRecoverContainer>
        <Card>
          <CardHeader>
            <Heading5><strong>Bienvenido(a) a la sección:</strong></Heading5>
            <Heading2>Recuperar Contraseña.</Heading2>
            <h6>Confirma y envía tu correo electrónico para continuar...</h6>
          </CardHeader>
          <CardBody>
            <form>
              <FormGroup>
                <label htmlFor="email">Email*</label>
                <FormControl type="email" id="email" placeholder="digitaaquí@tucorreo.com" />
              </FormGroup>
              <ButtonPrimary type="submit">
                Enviar
              </ButtonPrimary>
            </form>
          </CardBody>
        </Card>
      </PasswordRecoverContainer>
    </div>
  );
};

export default PasswordRecover;
