import React from 'react';
import styled from 'styled-components';
import '../../styles/specific/buttons.css'; // Importa el archivo CSS para los botones

const ContactContainer = styled.div`
  margin-top: 100px;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const Heading1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Heading2 = styled.h2`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  color: #444;
`;

const Paragraph = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #0AA1DD;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background-color: #095bc2;
  }
`;

const Map = styled.div`
  margin: 2rem 0;
`;

const ContactUs = () => {
  return (
    <ContactContainer style={{ marginTop: '100px' }}>
    <img className='imagenfondo'
    src="/oip.jpeg"
    alt="imagen de fondo" />
      <Heading1>Contáctanos</Heading1>
      <Paragraph>Estamos aquí para ayudarte. Ponte en contacto con nosotros a través de cualquiera de los siguientes medios:</Paragraph>
      <Paragraph>
        <strong>Teléfono:</strong> +57 310 755 59 66
        <br />
        <strong>Correo Electrónico:</strong> contacto@decoracionesortiz.com
        <br />
        <strong>Dirección:</strong> Calle 10 sur # 25 - 04 Barrio Sinaí, Neiva - Huila, Colombia
      </Paragraph>
      <Paragraph>
        <strong>Horario de Atención:</strong>
        <br />
        Lunes a Viernes: 8:00 AM - 6:00 PM
        <br />
        Sábados: 9:00 AM - 1:00 PM
      </Paragraph>
      <Paragraph>
        Síguenos en nuestras redes sociales:
        <br />
        <a href="https://facebook.com">Facebook</a> | <a href="https://twitter.com">Twitter</a> | <a href="https://instagram.com">Instagram</a>
      </Paragraph>
      <Heading1>¿Quienes somos?</Heading1>
      <Paragraph>Cortina tras cortina, tenemos ocultas muchas más cosas para ti...</Paragraph>
      <button className="asesoriasButton">Asesorías</button> {/* Utiliza la clase asesoriasButton*/}
      <Paragraph>¿Necesitas más información sobre algún tipo de cortina en particular? ¡No dudes en preguntarnos! Podemos ayudarte a elegir la cortina ideal para tu hogar o espacio especial.</Paragraph>
      <Map>
        {/* Integrar aqui Google Maps */}
      </Map>
      <Heading2>Formulario de Contacto</Heading2>
      <ContactForm>
        <Input type="text" placeholder="Nombre" required />
        <Input type="email" placeholder="Correo Electrónico" required />
        <Input type="tel" placeholder="Teléfono" />
        <Input type="text" placeholder="Asunto" required />
        <TextArea rows="4" placeholder="Mensaje" required></TextArea>
        <Button type="submit">Enviar</Button>
      </ContactForm>
    </ContactContainer>
  );
}

ContactUs.propTypes = {};

export default ContactUs;
