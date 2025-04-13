import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Estilización del contenedor principal
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 20px;
`;

// Estilización del formulario
const StyledForm = styled(Form)`
  background: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 700px;
`;

// Estilización de los botones
const StyledButton = styled(Button)`
  background-color: #007bff;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 5px;
  width: 100%;
  &:hover {
    background-color: #0056b3;
  }
`;

// Estilización de los grupos de formulario
const FormGroupStyled = styled(Form.Group)`
  margin-bottom: 20px;
`;

const NuevoUsuario = () => {
  const [usuario, setUsuario] = useState({
    id_type: '',       // Tipo de identificación
    name: '',          // Nombre
    id: '',            // Documento / ID
    phone: '',         // Teléfono
    address: '',       // Dirección
    neighborhood: '',  // Barrio
    city: '',          // Ciudad
    state: '',         // Departamento
    country: '',       // Nacionalidad
    email: '',         // Correo electrónico
    password: '',      // Contraseña
    confirmPassword: '', // Confirmación de contraseña
    terms: false,      // Aceptación de términos y condiciones
    role: '',           // Rol del usuario (administrador, vendedor, usuario)
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUsuario({ ...usuario, [name]: type === 'checkbox' ? checked : value });
  };

  const validateForm = () => {
    const errors = [];
    if (!usuario.id_type) errors.push('El tipo de identificación es obligatorio.');
    if (!usuario.id) errors.push('El documento / ID es obligatorio.');
    if (!usuario.name) errors.push('El nombre es obligatorio.');
    if (!usuario.phone) errors.push('El teléfono es obligatorio.');
    if (!usuario.address) errors.push('La dirección es obligatoria.');
    if (!usuario.neighborhood) errors.push('El barrio es obligatorio.');
    if (!usuario.city) errors.push('La ciudad es obligatoria.');
    if (!usuario.state) errors.push('El departamento es obligatorio.');
    if (!usuario.country) errors.push('La nacionalidad es obligatoria.');
    if (!usuario.email) errors.push('El correo electrónico es obligatorio.');
    if (!usuario.password) errors.push('La contraseña es obligatoria.');
    if (!usuario.confirmPassword) errors.push('La confirmación de la contraseña es obligatoria.');
    if (!usuario.terms) errors.push('Debe aceptar los términos y condiciones.');
    if (!usuario.role) errors.push('Debe seleccionar un rol para el usuario.');
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }

    if (usuario.password !== usuario.confirmPassword) {
      alert('Las contraseñas no coinciden. Por favor, verifica e inténtalo de nuevo.');
      return;
    }

    // Define los permisos según el rol seleccionado
    const permisosPorRol = {
      administrador: ['gestionar_usuarios', 'gestionar_inventario', 'gestionar_pedidos'],
      vendedor: ['gestionar_pedidos', 'gestionar_facturacion'],
      usuario: ['ver_informacion_personal'],
  };

      const usuarioConPermisos = {
          ...usuario,
          permisos: permisosPorRol[usuario.role] || [],
      };

      console.log('Datos enviados al backend:', usuarioConPermisos);

      try {
        const response = await axios.post('/api/usuarios', usuarioConPermisos);
        if (response.status === 201) {
            alert('Usuario creado exitosamente');
            navigate('/users/lista');
        }
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        alert('Hubo un error al crear el usuario. Por favor, inténtalo de nuevo.');
    }
};

  return (
    <div style={{ marginTop: '100px' }}>
      <img className='imagenfondo'
       src="/oip.jpeg"
       alt="imagen de fondo" />
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <h3 className="text-center mb-4">Crear Nuevo Usuario</h3>
        <h6>Rellena todos los campos para registrar un nuevo usuario:</h6>
        <br />
        <Row>
          <Col md={6}>
            <FormGroupStyled controlId="formIdType">
              <Form.Label>Tipo de Identificación</Form.Label>
              <Form.Control
                as="select"
                name="id_type"
                value={usuario.id_type}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un tipo</option>
                <option value="CC">Cédula de Ciudadanía</option>
                <option value="NIT">NIT</option>
                <option value="TI">Tarjeta de Identidad</option>
              </Form.Control>
            </FormGroupStyled>
          </Col>
          <Col md={6}>
            <FormGroupStyled controlId="formId">
              <Form.Label>Número ID</Form.Label>
              <Form.Control
                type="text"
                name="id"
                value={usuario.id}
                onChange={handleChange}
                required
              />
            </FormGroupStyled>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroupStyled controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={usuario.name}
                onChange={handleChange}
                required
              />
            </FormGroupStyled>
          </Col>
          <Col md={6}>
            <FormGroupStyled controlId="formPhone">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={usuario.phone}
                onChange={handleChange}
                required
              />
            </FormGroupStyled>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroupStyled controlId="formAddress">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={usuario.address}
                onChange={handleChange}
                required
              />
            </FormGroupStyled>
          </Col>
          <Col md={6}>
            <FormGroupStyled controlId="formNeighborhood">
              <Form.Label>Barrio</Form.Label>
              <Form.Control
                type="text"
                name="neighborhood"
                value={usuario.neighborhood}
                onChange={handleChange}
                required
              />
            </FormGroupStyled>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroupStyled controlId="formCity">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={usuario.city}
                onChange={handleChange}
                required
              />
            </FormGroupStyled>
          </Col>
          <Col md={6}>
            <FormGroupStyled controlId="formState">
              <Form.Label>Departamento</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={usuario.state}
                onChange={handleChange}
                required
              />
            </FormGroupStyled>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroupStyled controlId="formCountry">
              <Form.Label>Nacionalidad</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={usuario.country}
                onChange={handleChange}
                required
              />
            </FormGroupStyled>
          </Col>
          <Col md={6}>
            <FormGroupStyled controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={usuario.email}
                onChange={handleChange}
                required
              />
            </FormGroupStyled>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroupStyled controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={usuario.password}
                onChange={handleChange}
                required
              />
            </FormGroupStyled>
          </Col>
          <Col md={6}>
            <FormGroupStyled controlId="formConfirmPassword">
              <Form.Label>Confirmar Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={usuario.confirmPassword}
                onChange={handleChange}
                required
              />
            </FormGroupStyled>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FormGroupStyled controlId="formRole">
              <Form.Label>Rol</Form.Label>
              <Form.Control
                as="select"
                name="role"
                value={usuario.role}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un rol para el usuario</option>
                <option value="administrador">Administrador</option>
                <option value="vendedor">Vendedor</option>
                <option value="usuario">Usuario</option>
              </Form.Control>
            </FormGroupStyled>
          </Col>
        </Row>
        <FormGroupStyled controlId="formTerms">
          <Form.Check
            type="checkbox"
            name="terms"
            label="Acepto los términos y condiciones"
            checked={usuario.terms}
            onChange={handleChange}
            required
          />
        </FormGroupStyled>
        <StyledButton type="submit">
          Crear Usuario
        </StyledButton>
      </StyledForm>
    </FormContainer>
    </div>
  );
};

export default NuevoUsuario;