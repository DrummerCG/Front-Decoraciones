import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #ff980e;
  color: white;
  padding: 2rem;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1rem;
`;

const Column = styled.div`
  flex: 1;
  max-width: 300px;
  margin: 1rem;
`;

const Heading = styled.h5`
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ButtonWhatsapp = styled.button`
  background-color: #008069; /* Color especificado */
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 50px; /* Botón redondeado */
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #005a4b; /* Un verde ligeramente más oscuro al pasar el cursor */
  }
`;

const Footer = () => {
  const sendWhatsapp = (selectedProduct) => {
    const telefono = "573002312301";
    const link = `https://wa.me/${telefono}?text=Hola,%20¿cómo%20estás?%20quiero%20esta:%20${selectedProduct}`;
    window.open(link);
  };

  return (
    <FooterContainer>
      <Container>
        <Column>
          <Heading>Navega</Heading>
          <List>
            <ListItem>
              <FooterLink to="/">Inicio</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink to="/catalog">Catálogo</FooterLink>
            </ListItem>
          </List>
        </Column>
        <Column>
          <Heading>Redes Sociales</Heading>
          <List>
            <ListItem>
              <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">Whatsapp</a>
            </ListItem>
            <ListItem>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            </ListItem>
            <ListItem>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </ListItem>
          </List>
        </Column>
        <Column>
          <Heading>Información de Contacto</Heading>
          <p>Teléfono: +57 310 755 59 66</p>
          <p>Email: contacto@decoracionesortiz.com</p>
        </Column>
        <Column>
          <Heading>Ubicación</Heading>
          <p>Calle 10 sur # 25 - 04 Barrio Sinaí, Tolima</p>
        </Column>
      </Container>
      <ButtonWhatsapp onClick={() => sendWhatsapp("cortina kawaii")}>
        Envíanos un Whatsapp
      </ButtonWhatsapp>
    </FooterContainer>
  );
};

export default Footer;