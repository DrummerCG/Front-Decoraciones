import React, { useState } from 'react';
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

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 0.5rem;
`;

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    phone: '',
    address: '',
    city: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'El nombre es obligatorio';
    if (!formData.id) newErrors.id = 'El documento / ID es obligatorio';
    if (!formData.phone) {
      newErrors.phone = 'El teléfono es obligatorio';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'El teléfono debe tener 10 dígitos';
    }
    if (!formData.address) newErrors.address = 'La dirección es obligatoria';
    if (!formData.city) newErrors.city = 'La ciudad es obligatoria';
    if (!formData.email) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido';
    }
    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'La confirmación de la contraseña es obligatoria';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }
    if (!formData.terms) newErrors.terms = 'Debe aceptar los términos y condiciones';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(formData);
      // Aquí puedes hacer la petición con axios
    }
  };

  return (
    <div><img className='imagenfondo'
      src="/oip.jpeg"
      alt="imagen de fondo" />
    <RegisterContainer>
      <Card>
        <CardHeader>
          <Heading5>Hola, Bienvenido(a)</Heading5>
          <Heading2>Regístrate...</Heading2>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="name">Nombre(s) y Apellidos*</label>
              <FormControl type="text" id="name" placeholder="digita tu nombre completo" value={formData.name} onChange={handleChange} />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <label htmlFor="id">Documento / ID*</label>
              <FormControl type="text" id="id" placeholder="digita tu número de identidad" value={formData.id} onChange={handleChange} />
              {errors.id && <ErrorMessage>{errors.id}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <label htmlFor="phone">Teléfono*</label>
              <FormControl type="tel" id="phone" placeholder="digita tu número telefónico" value={formData.phone} onChange={handleChange} />
              {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <label htmlFor="address">Dirección / Barrio*</label>
              <FormControl type="text" id="address" placeholder="digita tu ubicación local" value={formData.address} onChange={handleChange} />
              {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <label htmlFor="city">Ciudad / Departamento*</label>
              <FormControl type="text" id="city" placeholder="digita tu ciudad y departamento" value={formData.city} onChange={handleChange} />
              {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email*</label>
              <FormControl type="email" id="email" placeholder="digitaaquí@tucorreo.com" value={formData.email} onChange={handleChange} />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">Contraseña*</label>
              <FormControl type="password" id="password" placeholder="digita tu contraseña" value={formData.password} onChange={handleChange} />
              {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <label htmlFor="confirmPassword">Confirmar Contraseña*</label>
              <FormControl type="password" id="confirmPassword" placeholder="confirma tu contraseña" value={formData.confirmPassword} onChange={handleChange} />
              {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
            </FormGroup>
            <CheckBoxWrapper>
              <input type="checkbox" id="terms" checked={formData.terms} onChange={handleChange} />
              <label htmlFor="terms">Acepto los Términos y condiciones</label>
              {errors.terms && <ErrorMessage>{errors.terms}</ErrorMessage>}
            </CheckBoxWrapper>
            <ActionGroup>
              <ButtonPrimary type="submit">
                Crear Cuenta
              </ButtonPrimary>
              <LinkStyled to="/sign-in">
                ¿Ya tienes cuenta? Inicia sesión
              </LinkStyled>
            </ActionGroup>
          </form>
        </CardBody>
      </Card>
    </RegisterContainer>
    </div>
  );
};

export default Register;