import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos //
import '../../styles/specific/Services.css'; //Imagen de fondo //

const ServicesContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 3rem;
  width: 70%;
  margin-left: 15%;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-family: 'Open Sans', sans-serif;
`;

const Heading2 = styled.h2`
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  color: #444;
`;

const Paragraph = styled.p`
  margin-top: 3rem;
  margin-bottom: 2.5rem;
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  font-family: 'Open Sans', sans-serif;
`;

const LinkStyled = styled(Link)`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-family: 'Raleway', sans-serif;
`;

const ListItem = styled.li`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  font-family: 'Raleway', sans-serif;
  font-size: 1.3rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-top: 2rem;
  margin-bottom: 3rem;
  font-weight: bold;
  font-family: 'Roboto', serif;
`;

const Services = () => {
  return (
    <div>
      <img className='imagenfondo' src="/oip.jpeg" alt="imagen de fondo" />
      <ServicesContainer>
        <Title>Nuestros Servicios</Title>
        <Paragraph>"Pensados para dar soluciones, comodidad, seguridad y conformidad a tus espacios, con la mayor facilidad y economía al alcance de todos nuestros clientes y usuarios. 
          <br />Por favor, selecciona en el siguiente listado una de las opciones de tu gusto o interés en la cual deseas realizar una solicitud de asistencia."</Paragraph>
        <div className="services-list">
          <Heading2>Servicios disponibles</Heading2>
          <List>
            <ListItem>
              <LinkStyled to="/installations"><strong>Instalaciones</strong></LinkStyled>
            </ListItem>
            <ListItem>
              <LinkStyled to="/maintenance"><strong>Mantenimiento</strong></LinkStyled>
            </ListItem>
            <ListItem>
              <LinkStyled to="/repairs"><strong>Reparaciones</strong></LinkStyled>
            </ListItem>
            <ListItem>
              <LinkStyled to="/warranties"><strong>Garantías</strong></LinkStyled>
            </ListItem>
            <ListItem>
              <LinkStyled to="/pqrs"><strong>PQRS</strong></LinkStyled>
            </ListItem>
          </List>
          <Paragraph>En <b>Decoraciones Ortiz</b>, ofrecemos nuestros productos y servicios con la más alta calidad para asegurar el mejor resultado y satisfacción. Nuestros expertos garantizan una atención completa y enfocada en cada detalle, adaptándose a tus necesidades de funcionalidad, estilo y estética.</Paragraph>
        </div>
      </ServicesContainer>
    </div>
  );
}

Services.propTypes = {};

export default Services;
