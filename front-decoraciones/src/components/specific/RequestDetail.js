import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailContainer = styled.div`
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

const Content = styled.div`
  font-size: 1rem;
  color: #666;
`;

const RequestDetail = () => {
  const { id } = useParams();
  const [request, setRequest] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/solicitudes/${id}`)
      .then(response => {
        setRequest(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los detalles de la solicitud:', error);
      });
  }, [id]);

  if (!request) {
    return <div>Cargando...</div>;
  }

  return (
    <DetailContainer>
      <Title>{request.Titulo}</Title>
      <Content>{request.Descripcion}</Content>
    </DetailContainer>
  );
};

RequestDetail.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RequestDetail;