import React from 'react';
import styled from 'styled-components';

const PasswordRecoverContainer = styled.div`
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
  justify-content: space-between;
  align-items: center;
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
  border: 1px solid #FF980E;
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

const PasswordRecover = () => {
  return (
    <div><img className='imagenfondo'
      src="/oip.jpeg"
      alt="imagen de fondo" />
    <PasswordRecoverContainer>
      <Card>
        <CardHeader>
          <h2>Recuperar Contraseña</h2>
          <button className="close-button">&times;</button>
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