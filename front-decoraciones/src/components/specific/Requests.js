import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';

const RequestsContainer = styled.div`
  margin-top: 50px;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f4f4f4;
  text-align: left;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const LinkStyled = styled(Link)`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Requests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/solicitudes')
      .then(response => {
        // Ordenar las solicitudes por orden de entrada (si tienen un campo de fecha)
        const sortedRequests = response.data.sort((a, b) => new Date(a.Fecha) - new Date(b.Fecha));
        setRequests(sortedRequests);
      })
      .catch(error => {
        console.error('Error al obtener las solicitudes:', error);
      });
  }, []);

  return (
    <RequestsContainer>
      <Title>Solicitudes de Servicios</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Título</TableHeader>
            <TableHeader>Fecha</TableHeader>
            <TableHeader>Acciones</TableHeader>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index}>
              <TableCell>{request.Id}</TableCell>
              <TableCell>{request.Titulo}</TableCell>
              <TableCell>{new Date(request.Fecha).toLocaleDateString()}</TableCell>
              <TableCell>
                <LinkStyled to={`/solicitudes/${request.Id}`}>Ver Detalles</LinkStyled>
              </TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </RequestsContainer>
  );
};

Requests.propTypes = {
  requests: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.number.isRequired,
      Titulo: PropTypes.string.isRequired,
      Fecha: PropTypes.string.isRequired, 
    })
  ),
};

export default Requests;