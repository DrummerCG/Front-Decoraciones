import React, { useState } from 'react';
import styled from 'styled-components';
import Rating from '../Rating'; 

const PqrsContainer = styled.div`
  display: grid;
  width: 70%;
  place-items: center;
  margin-top: 100px;
  margin-left: 15%;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const Heading1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const Heading2 = styled.h2`
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-size: 1.5rem;
  color: #444;
`;

const Paragraph = styled.p`
  width: 85%;
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-left: 7.5%;
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  text-align: justify;
`;

const OrderedList = styled.ol`
  width: 80%;
  color: #555;
  margin-left: 10%;
  text-align: justify;
  padding-left: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
`;

const ContactForm = styled.form`
  padding: 0.5rem;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 15%;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
`;

const Select = styled.select`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
`;

const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
`;

const FileInput = styled.input`
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
  margin-left: 30%;
`;

const ServicesButton = styled.button`
  padding: 0.5rem;
  width: 50%;
  font-size: 1rem;
  justify-content: center;
  background-color: ${props => getBackgroundColor(props.variant)};
  border: 3px solid ${props => getBackgroundColor(props.variant)};
  color: white;
  border-radius: 4px;
  font-weight: semibold;
  cursor: pointer;
  margin-top: 2rem;
  margin-bottom: 2rem;

  &:hover {
    background-color: ${props => lightenColor(props.variant)};
    border: 3px solid ${props => getBackgroundColor(props.variant)};
    color: black;
  }

  &:active {
    background-color: ${props => getBackgroundColor(props.variant)};
    border: 3px solid ${props => getBackgroundColor(props.variant)};
    color: white;
  }
`;

function getBackgroundColor(variant) {
  switch (variant) {
    case 'primary':
      return '#007bff';
    case 'success':
      return '#28a745';
    case 'warning':
      return '#FF6000';
    case 'danger':
      return '#dc3545';
    case 'info':
      return '#17a2b8';
    case 'secondary':
      return '#6c757d'; // Gris para secondary (Pqrs)
    default:
      return '#3C3D37';
  }
}

function lightenColor(variant) {
  switch (variant) {
    case 'primary':
      return '#85b5ff';
    case 'success':
      return '#7fcf8a';
    case 'warning':
      return '#FFB87F';
    case 'danger':
      return '#f28d8d';
    case 'info':
      return '#a6d8e4';
    case 'secondary':
      return '#b1b1b1'; // Gris claro para secondary (Pqrs)
    default:
      return '#8C8C8C';
  }
}

const Pqrs = () => {
    const [tipoPQRS, setTipoPQRS] = useState("");
  
    const handleTipoPQRSChange = (e) => {
      setTipoPQRS(e.target.value);
    };

  return (
    <div>
      <img className='imagenfondo' 
      src="/oip.jpeg" 
      alt="imagen de fondo" />
      <PqrsContainer>
        <Heading1>PQRS</Heading1>
        <div className="services-list">
          <Paragraph>
           "En <b>Decoraciones Ortiz</b>, valoramos la opinión de nuestros clientes y nos comprometemos a brindar un excelente servicio. La sección de PQRS está diseñada para recibir y gestionar sus peticiones, quejas, reclamos y sugerencias, y así mejorar continuamente nuestros productos y servicios."
          </Paragraph>
          <Heading2>Tipos de PQRS para usuarios.</Heading2>
          <OrderedList>
            <ListItem><b>Peticiones:</b> Solicitudes de información requerida o servicio adicional.</ListItem>
            <ListItem><b>Quejas:</b> Expresiones de insatisfacción con los productos o el servicio recibido.</ListItem>
            <ListItem><b>Reclamos:</b> Solicitudes de resolución de problemas o pendientes específicos.</ListItem>
            <ListItem><b>Sugerencias:</b> Propuestas o ideas de mejora como comentarios constructivos.</ListItem>
          </OrderedList>
          <Paragraph>
            Para hacer efectivo nuestro proceso de <b>PQRS</b>, le solicitamos que por favor complete el siguiente formulario con sus datos, foto legible o imagen relevante y una descripción del motivo de su solicitud. De ser necesario, nos pondremos en contacto en la mayor brevedad de tiempo posible, para brindar la mejor solución a sus necesidades y expectativas. 
            <br /> <b>Agradecemos su confianza y paciencia.</b>
          </Paragraph>
          <ContactForm>
            <Input type="text" placeholder="Nombre completo" required />
            <Input type="text" placeholder="Documento de Identificación" required />
            <Input type="email" placeholder="Correo Electrónico" required />
            <Input type="tel" placeholder="Teléfono" required />
            <Select value={tipoPQRS} onChange={handleTipoPQRSChange} required>
              <option value="">Seleccione el <b>Tipo de PQRS</b> de su interés</option>
              <option value="peticion">Petición</option>
              <option value="queja">Queja</option>
              <option value="reclamo">Reclamo</option>
              <option value="sugerencia">Sugerencia</option>
            </Select>
            <TextArea rows="4" placeholder="Describe aquí el motivo de tu solicitud." required />
            {tipoPQRS === "queja" || tipoPQRS === "reclamo" ? (
              <>
                <FileInput type="file" accept="image/*" required />
                <Paragraph><strong>Adjuntar Documento:</strong> Por favor asegúrese de cargar una imagen o foto legible para respaldar su solicitud. La imagen debe mostrar claramente los datos del producto(s) o inconvenientes del servicio, para que podamos verificar la información y procesar su solicitud de manera efectiva y eficiente.</Paragraph>
              </>
            ) : null}
            <ServicesButton variant="danger"><strong>Enviar Solicitud</strong></ServicesButton>
          </ContactForm>
          <Paragraph>
            Con el objetivo de brindar un servicio excelente y profesional a todos nuestros usuarios, en <strong>Decoraciones Ortiz</strong>, buscamos cada día ser mejores en beneficio de nuestros clientes. Por ende, te invitamos a opinar y calificar nuestros servicios y productos, junto con los profesionales, quienes dedican su atención y conocimientos para adaptar y solucionar con precisión todas tus exigencias y requerimientos.
          </Paragraph>
          <Rating />
        </div>
      </PqrsContainer>
    </div>
  );
}

export default Pqrs;