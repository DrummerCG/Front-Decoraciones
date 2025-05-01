import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Form, Button, Row, Col, Table, Alert } from 'react-bootstrap';

// Estilización del contenedor principal
const FormContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  border-radius: 10px;
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
  width: 50%;
  &:hover {
    background-color: #0056b3;
  }
  margin-top: 10px;
`;

const EditarUsuario = ({ userRole }) => {
  const navigate = useNavigate();

  // Estado para los datos del usuario
  const [usuario, setUsuario] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    direccion: '',
    barrio: '',
    ciudad: '',
    departamento: '',
    rol: '',
  });

  // Estado para la lista de usuarios y el filtro de búsqueda
  const [usuarios, setUsuarios] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  // Verificar si el usuario actual es administrador
  useEffect(() => {
    if (userRole !== 'administrador') {
      alert('No tienes permisos para editar usuarios.');
      navigate('/'); // Redirige al usuario si no es administrador
    }
  }, [userRole, navigate]);

  // Cargar la lista de usuarios al montar el componente
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('/api/usuarios'); // Reemplaza con tu endpoint
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error('Error al cargar los usuarios:', error);
        console.log('Usuario no encontrado');
      }
    };

    fetchUsuarios();
  }, []);

  // Filtrar usuarios según el texto ingresado
  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    usuario.correo.toLowerCase().includes(filtro.toLowerCase())
  );

  // Cargar los datos del usuario seleccionado
  const seleccionarUsuario = async (usuarioId) => {
    try {
      const response = await fetch(`/api/usuarios/${usuarioId}`); // Reemplaza con tu endpoint
      const data = await response.json();
      setUsuario(data);
    } catch (error) {
      console.error('Error al cargar los datos del usuario:', error);
    }
  };

  // Mostrar mensaje de error si no hay resultados
  useEffect(() => {
    if (filtro && usuariosFiltrados.length === 0) {
      setMensajeError('No se encontraron usuarios con el nombre o correo ingresado.');
    } else {
      setMensajeError('');
    }
  }, [filtro, usuariosFiltrados]);

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/usuarios/${usuario.id}`, {
        method: 'PUT', // Método HTTP para actualizar
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });

      if (response.ok) {
        alert('Usuario actualizado correctamente');
        navigate('/users/lista'); // Redirige a la lista de usuarios
      } else {
        alert('Error al actualizar el usuario');
      }
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
    }
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <img className='imagenfondo'
       src="/oip.jpeg"
       alt="imagen de fondo" />
    <div>
      <FormContainer>
      <h3 className="text-center mb-4">Buscar Usuario para Editar</h3>
      <Form>
        <Form.Group controlId="formBuscarUsuario">
          <Form.Label>Búsqueda de usuarios por Nombre o Correo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Escribe el nombre o correo del usuario"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
        </Form.Group>
      </Form>
      {mensajeError && (
        <Alert variant="danger" className="mt-3">
          {mensajeError}
        </Alert>
      )}
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>direccion</th>
            <th>barrio</th>    
            <th>ciudad</th>   
            <th>departamento</th> 
            <th>Acciones</th>  
          </tr>
        </thead>
        <tbody>
          {usuariosFiltrados.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nombre}</td>
              <td>{usuario.correo}</td>
              <td>{usuario.telefono}</td>
                <td>{usuario.direccion}</td>
                <td>{usuario.barrio}</td>
                <td>{usuario.ciudad}</td>
                <td>{usuario.departamento}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => seleccionarUsuario(usuario.id)}
                >
                  Seleccionar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
        <StyledForm onSubmit={handleSubmit}>
          <h3 className="text-center mb-4">Editar Usuario</h3>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={usuario.nombre}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                  type="email"
                  name="correo"
                  value={usuario.correo}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formPhone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  name="telefono"
                  value={usuario.telefono}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formAddress">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  name="direccion"
                  value={usuario.direccion}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formNeighborhood">
                <Form.Label>Barrio</Form.Label>
                <Form.Control
                  type="text"
                  name="barrio"
                  value={usuario.barrio}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formCity">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  type="text"
                  name="ciudad"
                  value={usuario.ciudad}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formState">
                <Form.Label>Departamento</Form.Label>
                <Form.Control
                  type="text"
                  name="departamento"
                  value={usuario.departamento}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formRole">
                <Form.Label> Agregar un Rol de usuariio</Form.Label>
                <Form.Control
                  as="select"
                  name="rol"
                  value={usuario.rol}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccionar</option>
                  <option value="administrador">Administrador</option>
                  <option value="vendedor">Vendedor</option>
                  <option value="usuario">Usuario</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
            <br />
          <StyledButton type="submit">Guardar Cambios</StyledButton>
          <br />
          <StyledButton
            type="button"
            variant="secondary"
            onClick={() => navigate('/users/lista')}
          >
            Cancelar
          </StyledButton>
        </StyledForm>
      </FormContainer>
    </div>
    </div>
  );
};

export default EditarUsuario;