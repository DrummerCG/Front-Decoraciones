import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  return (
    <RequestsContainer>
      <Title>Solicitudes de Servicios</Title>
      <List>
        <ListItem>
          <LinkStyled to="/installations">Instalaciones</LinkStyled>
        </ListItem>
        <ListItem>
          <LinkStyled to="/maintenance">Mantenimiento</LinkStyled>
        </ListItem>
        <ListItem>
          <LinkStyled to="/repairs">Reparaciones</LinkStyled>
        </ListItem>
        <ListItem>
          <LinkStyled to="/warranties">Garantías</LinkStyled>
        </ListItem>
        <ListItem>
          <LinkStyled to="/pqrs">PQRS</LinkStyled>
        </ListItem>
        <ListItem>
          <LinkStyled to="/comments">Comentarios</LinkStyled>
        </ListItem>
      </List>
    </RequestsContainer>
  );
};

export default Requests;