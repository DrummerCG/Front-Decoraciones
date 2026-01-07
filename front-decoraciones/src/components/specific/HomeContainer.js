import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  // Estilos para el contenedor
`;

const HomeContainer = ({ children, style }) => {
  return <Container style={style}>{children}</Container>;
};

export default HomeContainer;
