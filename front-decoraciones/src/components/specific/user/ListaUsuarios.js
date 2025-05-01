import React, { useEffect, useState } from 'react';
import styled from 'styled-components'; // Para estilos personalizados
import './ListaUsuarios.css'; // Archivo CSS adicional para estilos específicos

// Estilización del contenedor principal
const PageContainer = styled.div`
  margin-top: 100px;
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

// Estilización del título
const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #343a40;
`;

// Estilización del buscador
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 16px;
`;

// Estilización de la tabla
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.th`
  background-color: #007bff;
  color: #ffffff;
  padding: 10px;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #dee2e6;
`;

const ActionButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const NoDataMessage = styled.td`
  text-align: center;
  padding: 20px;
  color: #6c757d;
`;

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]); // Inicializa como un array vacío
  const [loading, setLoading] = useState(true); // Estado para mostrar el cargando
  const [filtro, setFiltro] = useState(''); // Estado para el texto del buscador
  const [usuariosFiltrados, setUsuariosFiltrados] = useState([]); // Estado para los usuarios filtrados

  useEffect(() => {
    // Llama al endpoint para obtener los usuarios
    fetch('http://localhost:3001/api/usuarios')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setUsuarios(data); // Asegúrate de que `data` sea un array
          setUsuariosFiltrados(data); // Inicialmente, los usuarios filtrados son todos los usuarios
        } else {
          console.error('La respuesta no es un array:', data);
          setUsuarios([]);
          setUsuariosFiltrados([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener usuarios:', error);
        setUsuarios([]);
        setUsuariosFiltrados([]);
        setLoading(false);
      });
  }, []);

  // Filtrar usuarios según el texto ingresado en el buscador
  useEffect(() => {
    if (filtro.trim() === '') {
      setUsuariosFiltrados(usuarios); // Si no hay filtro, mostrar todos los usuarios
    } else {
      const filtrados = usuarios.filter((usuario) =>
        usuario.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        usuario.correo.toLowerCase().includes(filtro.toLowerCase())
      );
      setUsuariosFiltrados(filtrados);
    }
  }, [filtro, usuarios]);

  return (
    <PageContainer>
      <img className="imagenfondo" src="/oip.jpeg" alt="imagen de fondo" />
      <Title>Lista de Usuarios Registrados</Title>
      <SearchContainer>
        <label htmlFor="buscador">Buscar usuario por Nombre o Correo:</label>
        <SearchInput
          type="text"
          id="buscador"
          placeholder="Escribe el nombre o correo del usuario"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </SearchContainer>
      {loading ? (
        <p className="loading">Cargando usuarios...</p>
      ) : (
        <StyledTable>
          <thead>
            <tr>
              <TableHeader>ID</TableHeader>
              <TableHeader>Nombre</TableHeader>
              <TableHeader>Correo</TableHeader>
              <TableHeader>Teléfono</TableHeader>
              <TableHeader>Dirección</TableHeader>
              <TableHeader>Barrio</TableHeader>
              <TableHeader>Ciudad</TableHeader>
              <TableHeader>Departamento</TableHeader>
              <TableHeader>Nacionalidad</TableHeader>
              <TableHeader>Acciones</TableHeader>
            </tr>
          </thead>
          <tbody>
            {usuariosFiltrados.length > 0 ? (
              usuariosFiltrados.map((usuario, index) => (
                <tr key={index}>
                  <TableCell>{usuario.id}</TableCell>
                  <TableCell>{usuario.nombre}</TableCell>
                  <TableCell>{usuario.correo}</TableCell>
                  <TableCell>{usuario.telefono}</TableCell>
                  <TableCell>{usuario.direccion}</TableCell>
                  <TableCell>{usuario.barrio}</TableCell>
                  <TableCell>{usuario.ciudad}</TableCell>
                  <TableCell>{usuario.departamento}</TableCell>
                  <TableCell>{usuario.nacionalidad}</TableCell>
                  <TableCell>
                    <ActionButton>Eliminar</ActionButton>
                    <ActionButton>Bloquear</ActionButton>
                  </TableCell>
                </tr>
              ))
            ) : (
              <tr>
                <NoDataMessage colSpan="10">
                  No se encontraron usuarios con el filtro aplicado.
                </NoDataMessage>
              </tr>
            )}
          </tbody>
        </StyledTable>
      )}
    </PageContainer>
  );
};

export default ListaUsuarios;