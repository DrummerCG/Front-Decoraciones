import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa'; // Importa el icono de confirmación
import { Link } from 'react-router-dom';
import '../../../../styles/styles.css'; // Importa el archivo CSS con la imagen de fondo
import axios from 'axios';

const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  margin-bottom: 2rem;
  margin-top: 2rem;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
`;

const Card = styled.div`
  border: 5px solid #0AA1DD;
  border-radius: 8px;
  padding: 2rem;
  width: 100%;
  max-width: 600px; // Ajusta el tamaño máximo del contenedor
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
  position: relative; /* Asegura que los iconos de confirmación se posicionen correctamente */
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const FormControl = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${props => props.hasError ? 'red' : props.isValid ? '#0AA1DD' : props.isFocused ? '#3C3D37' : '#FF6000'};
  border-radius: 4px;
  margin-bottom: 1rem;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${props => props.hasError ? 'red' : '#3C3D37'};
  }

  ${props => props.isValid && `
    padding-right: 2.5rem; /* Espacio para el icono de confirmación */
  `}
`;

const ConfirmationIcon = styled(FaCheckCircle)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #0AA1DD;
  visibility: ${props => props.isValid ? 'visible' : 'hidden'};
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

const LinkStyled = styled(Link)`
  color: #3C3D37;
  text-decoration: none;
  margin-left: 0.5rem; /* Añadir margen izquierdo */
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  input {
    margin-right: 0.3rem; /* Separación de 3 puntos */
  }

  label {
    margin-right: 0.3rem; /* Alineación con el enlace */
  }

  span {
    display: flex;
    align-items: center;
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
    idType: 'CC',
    phone: '',
    address: '',
    neighborhood: '',
    city: '',
    state: '',
    country: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });

  const [errors, setErrors] = useState({});
  const [validFields, setValidFields] = useState({
    name: false,
    id: false,
    idType: false,
    phone: false,
    address: false,
    neighborhood: false,
    city: false,
    state: false,
    country: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [focusedFields, setFocusedFields] = useState({
    name: false,
    id: false,
    idType: false,
    phone: false,
    address: false,
    neighborhood: false,
    city: false,
    state: false,
    country: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
    setValidFields((prevValid) => ({
      ...prevValid,
      [id]: validateField(id, value),
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: !validateField(id, value),
    }));
  };

  const handleFocus = (e) => {
    const { id } = e.target;
    setFocusedFields((prevFocus) => ({
      ...prevFocus,
      [id]: true,
    }));
  };

  const handleBlur = (e) => {
    const { id } = e.target;
    setFocusedFields((prevFocus) => ({
      ...prevFocus,
      [id]: false,
    }));
  };

  const validateField = (id, value) => {
    switch (id) {
      case 'name':
        return value.trim() !== '';
      case 'id':
        return value.trim() !== '';
        case 'id_type':
        return value.trim() !== '';
      case 'phone':
        return /^\d{10}$/.test(value);
      case 'address':
        return value.trim() !== '';
      case 'neighborhood':
        return value.trim() !== '';
      case 'city':
        return value.trim() !== '';
      case 'state':
        return value.trim() !== '';
      case 'country':
        return value.trim() !== '';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case 'password':
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
      case 'confirmPassword':
        return value === formData.password;
      default:
        return false;
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'El nombre es obligatorio';
    if (!formData.id) newErrors.id = 'El documento / ID es obligatorio';
    if (!formData.id_type) newErrors.id_type = 'El tipo de identificación es obligatorio';
    if (!formData.phone) {
      newErrors.phone = 'El teléfono es obligatorio';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'El teléfono debe tener 10 dígitos';
    }
    if (!formData.address) newErrors.address = 'La dirección es obligatoria';
    if (!formData.neighborhood) newErrors.neighborhood = 'El barrio es obligatorio';
    if (!formData.city) newErrors.city = 'La ciudad es obligatoria';
    if (!formData.state) newErrors.state = 'El departamento es obligatorio';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post('http://localhost:3001/api/usuarios/registro', formData);
        if (response.status === 201) {
          alert('Usuario registrado exitosamente');
          // Redirigir al inicio de sesión o a otra página
        }
      } catch (error) {
        console.error('Error al registrar el usuario:', error);
        alert('Hubo un error al registrar el usuario');
      }
    }
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <img className='imagenfondo'
       src="/oip.jpeg"
       alt="imagen de fondo" />
     <RegisterContainer>
      <Card>
      <Heading5><strong>Hola, Bienvenido(a)</strong></Heading5>
      <Heading2>Regístrate...</Heading2>
      <br />
      <h6>"Regístrate fácil y sencillo, completa nuestro formulario y acepta los Términos. Luego accede y navega disfrutando de todos nuestros productos y servicios."</h6>
      <br />
      <CardHeader>
        <h6><b>Completa cada campo con tus datos personales. (*) Obligatorio</b></h6>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit}>
              <FormGroup>
                <label htmlFor="name">Nombre(s) y Apellidos*</label>
                <FormControl
                  type="text"
                  id="name"
                  placeholder="digita tu nombre completo"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  isValid={validFields.name}
                  hasError={errors.name}
                  isFocused={focusedFields.name}
                />
                {validFields.name && <ConfirmationIcon isValid={validFields.name} />}
                {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
              </FormGroup>
              <FormGroup>
                <label htmlFor="id_type">Tipo de Identificación*</label>
            <div style={{ position: 'relative' }}>
              <FormControl
                as="select" // Esto asegura que el campo sea un menú desplegable
                id="id_type"
                value={formData.id_type}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                hasError={errors.id_type}
                isValid={validFields.id_type}
                isFocused={focusedFields.id_type}
              >
                <option value="">Selecciona un tipo</option>
                <option value="CC">Cédula de Ciudadanía</option>
                <option value="NIT">NIT</option>
                <option value="TI">Tarjeta de Identidad</option>
              </FormControl>
              <ConfirmationIcon              
             />
            </div>
                {validFields.id_type && <ConfirmationIcon isValid={validFields.id_type} />}
                {errors.id_type && <ErrorMessage>{errors.id_type}</ErrorMessage>}
              </FormGroup>
              <FormGroup>
                <label htmlFor="id">Documento / ID*</label>
                <FormControl
                  type="text"
                  id="id"
                  placeholder="digita tu número de identidad"
                  value={formData.id}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  isValid={validFields.id}
                  hasError={errors.id}
                  isFocused={focusedFields.id}
                />
                {validFields.id && <ConfirmationIcon isValid={validFields.id} />}
                {errors.id && <ErrorMessage>{errors.id}</ErrorMessage>}
              </FormGroup>
              <FormGroup>
                <label htmlFor="phone">Teléfono*</label>
                <FormControl
                  type="tel"
                  id="phone"
                  placeholder="digita tu número telefónico"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  isValid={validFields.phone}
                  hasError={errors.phone}
                  isFocused={focusedFields.phone}
                />
                {validFields.phone && <ConfirmationIcon isValid={validFields.phone} />}
                {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
              </FormGroup>
              <FormGroup>
                <label htmlFor="address">Dirección*</label>
                <FormControl
                  type="text"
                  id="address"
                  placeholder="digita tu nomenclatura (numeración urbana)"
                  value={formData.address}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  isValid={validFields.address}
                  hasError={errors.address}
                  isFocused={focusedFields.address}
                />
                {validFields.address && <ConfirmationIcon isValid={validFields.address} />}
                {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}
              </FormGroup>
              <FormGroup>
                <label htmlFor="neighborhood">Barrio*</label>
                <FormControl
                  type="text"
                  id="neighborhood"
                  placeholder="digita el nombre de tu localidad"
                  value={formData.neighborhood}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  isValid={validFields.neighborhood}
                  hasError={errors.neighborhood}
                  isFocused={focusedFields.neighborhood}
                />
                {validFields.neighborhood && <ConfirmationIcon isValid={validFields.neighborhood} />}
                {errors.neighborhood && <ErrorMessage>{errors.neighborhood}</ErrorMessage>}
              </FormGroup>
              <FormGroup>
                <label htmlFor="city">Ciudad*</label>
                <FormControl
                  type="text"
                  id="city"
                  placeholder="digita tu ciudad de residencia"
                  value={formData.city}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  isValid={validFields.city}
                  hasError={errors.city}
                  isFocused={focusedFields.city}
                />
                {validFields.city && <ConfirmationIcon isValid={validFields.city} />}
                {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
              </FormGroup>
              <FormGroup>
                <label htmlFor="state">Departamento*</label>
                <FormControl
                  type="text"
                  id="state"
                  placeholder="digita tu departamento de ubicación"
                  value={formData.state}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  isValid={validFields.state}
                  hasError={errors.state}
                  isFocused={focusedFields.state}
                />
                {validFields.city && <ConfirmationIcon isValid={validFields.city} />}
                {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
              </FormGroup>
              <FormGroup>
                <label htmlFor="country">Nacionalidad*</label>
                <FormControl
                  type="text"
                  id="country"
                  placeholder="digita tu país de residencia"
                  value={formData.country}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  isValid={validFields.country}
                  hasError={errors.country}
                  isFocused={focusedFields.country}
                />
                {validFields.state && <ConfirmationIcon isValid={validFields.state} />}
                {errors.state && <ErrorMessage>{errors.state}</ErrorMessage>}
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email*</label>
                <FormControl
                  type="email"
                  id="email"
                  placeholder="digitaaquí@tucorreo.com"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  isValid={validFields.email}
                  hasError={errors.email}
                  isFocused={focusedFields.email}
                />
                {validFields.email && <ConfirmationIcon isValid={validFields.email} />}
                {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              </FormGroup>
              <FormGroup>
                <label htmlFor="password">Contraseña*</label>
                <FormControl
                  type="password"
                  id="password"
                  placeholder="digita tu contraseña"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  isValid={validFields.password}
                  hasError={errors.password}
                  isFocused={focusedFields.password}
                />
                {validFields.password && <ConfirmationIcon isValid={validFields.password} />}
                {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
              </FormGroup>
              <FormGroup>
                <label htmlFor="confirmPassword">Confirmar Contraseña*</label>
                <FormControl
                  type="password"
                  id="confirmPassword"
                  placeholder="confirma tu contraseña"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  isValid={validFields.confirmPassword}
                  hasError={errors.confirmPassword}
                  isFocused={focusedFields.confirmPassword}
                />
                {validFields.confirmPassword && <ConfirmationIcon isValid={validFields.confirmPassword} />}
                {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
              </FormGroup>
          <CheckBoxWrapper>
            <input type="checkbox" id="terms" checked={formData.terms} onChange={handleChange} />
            <label htmlFor="terms"></label>Acepto los<LinkStyled to="/terms-and-conditions">
                  <strong>Términos y condiciones</strong>
                </LinkStyled> 
            {errors.terms && <ErrorMessage>{errors.terms}</ErrorMessage>}
          </CheckBoxWrapper>
          <ActionGroup>
            <ButtonPrimary type="submit">
              Crear Cuenta
            </ButtonPrimary>
            <LinkStyled to="/login">
              ¿Ya tienes cuenta? <strong>Inicia sesión</strong>
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