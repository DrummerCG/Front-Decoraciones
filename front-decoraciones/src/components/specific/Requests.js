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

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
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
        setRequests(response.data);
      })
      .catch(error => {
        console.error('Error al obtener las solicitudes:', error);
      });
  }, []);

  return (
    <RequestsContainer>
      <Title>Solicitudes de Servicios</Title>
      <List>
        {requests.map((request, index) => (
          <ListItem key={index}>
            <LinkStyled to={`/solicitudes/${request.Id}`}>{request.Titulo}</LinkStyled>
          </ListItem>
        ))}
      </List>
    </RequestsContainer>
  );
};

Requests.propTypes = {
  requests: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.number.isRequired,
      Titulo: PropTypes.string.isRequired,
    })
  ),
};

export default Requests;