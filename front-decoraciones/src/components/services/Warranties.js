import React from 'react';
import styled from 'styled-components';
import Rating from '../specific/Rating'; 

const WarrantiesContainer = styled.div`
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
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  color: #444;
`;

const Paragraph = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
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
      return '#6c757d'; // Gris para secondary (garantías)
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
      return '#b1b1b1'; // Gris claro para secondary (garantías)
    default:
      return '#8C8C8C';
  }
}

const Warranties = () => {
  return (
    <div>
      <img className='imagenfondo' 
      src="/oip.jpeg" 
      alt="imagen de fondo" />
      <WarrantiesContainer>
        <Heading1>Garantías</Heading1>
        <div className="services-list">
          <Paragraph>
           "En <b>Decoraciones Ortiz</b>, nos comprometemos a garantizar la excelencia en cada uno de nuestros productos y servicios, cumpliendo rigurosamente con los más altos estándares de calidad y satisfacción del cliente. Nuestra política de garantías abarca la reparación o el reemplazo de productos que presenten defectos de fabricación, así como la atención eficiente y personalizada a las reclamaciones. Estas garantías son aplicables a todos los artículos y servicios que ofrecemos, incluyendo accesorios, instalaciones, mantenimiento y reparaciones, con el objetivo de brindar soluciones integrales y confianza a nuestros usuarios."
          </Paragraph>
          <Heading2>Política de Garantías (Leer con atención).</Heading2>
          <OrderedList>
            <ListItem><b>Duración de la Garantía:</b> Todos los productos tienen una garantía de 1 año a partir de la fecha de compra.</ListItem>
            <ListItem><b>Cobertura:</b> La garantía cubre defectos de fabricación y materiales. No aplica para daños causados por mal uso, accidentes o desgaste natural.</ListItem>
            <ListItem><b>Proceso de Reclamación:</b> Para efectuar su garantía, debe presentar la factura de compra y/o servicio, con el producto en su empaque original.</ListItem>
            <ListItem><b>Registro de Garantía:</b> Formulario que el cliente debe completar al presentar un reclamo, adjuntando una foto de la factura de compra.</ListItem>
            <ListItem><b>Reclamaciones:</b> Las reclamaciones para los servicios, deben ser presentadas en un plazo máximo de 30 días hábiles a partir de la asistencia realizada.</ListItem>
            <ListItem><b>Recepción de Reclamo:</b> El cliente puede presentar su reclamo en persona, por teléfono, o a través del sitio web <b>decoracionesrtiz.com</b>.</ListItem>
            <ListItem><b>Revisión y Aprobación:</b> El producto y/o argumento serán evaluados para determinar si aplica la garantía. En caso de aprobación, se procederá con la reparación y/o reemplazo del producto.</ListItem>
            <ListItem><b>Reparación y Reemplazo:</b> Los productos defectuosos serán reparados o reemplazados sin costo adicional para el cliente.</ListItem>
            <ListItem><b>Plazo de Respuesta:</b> El plazo máximo de respuesta para las garantías es de 30 días hábiles a partir de la fecha de recepción de la solicitud.</ListItem>
            <ListItem><b>Exclusión:</b> No se aceptarán garantías sin la factura de compra y tampoco por daños causados por mal uso, accidentes, modificaciones no autorizadas, desgaste natural o fuera del plazo o período máximo de garantía.</ListItem>
            <ListItem><b>Comunicación con el Cliente:</b> Se informará del estado de su reclamo y el tiempo estimado para la resolución.</ListItem>
            <ListItem><b>Documentación:</b> Manual de instrucciones detalladas sobre el uso y mantenimiento de los productos.</ListItem>
            <ListItem><b>Responsabilidades del Cliente:</b> Seguir las instrucciones de uso y mantenimiento proporcionadas en el manual del usuario, presentar el reclamo dentro del período de garantía y proporcionar una prueba de compra válida.</ListItem>
            <ListItem><b>Encuestas de Satisfacción:</b> Calificar los servicios y el proceso de reclamación, para evaluar la satisfacción del cliente y mejorar el proceso de garantías.</ListItem>
          </OrderedList>
          <Paragraph>
            Para hacer efectivo nuestro proceso de garantías, le solicitamos que por favor complete el siguiente formulario con sus datos, foto legible de la factura y una descripción del motivo de la solicitud. Nos pondremos en contacto en la mayor brevedad de tiempo posible, para coordinar una visita y brindar la mejor solución a sus necesidades y expectativas. 
            <br /> <b>Agradecemos su confianza y paciencia.</b>
          </Paragraph>
          <ContactForm>
            <Input type="text" placeholder="Nombre completo" required />
            <Input type="text" placeholder="Documento de Identificación" required />
            <Input type="email" placeholder="Correo Electrónico" required />
            <Input type="tel" placeholder="Teléfono" required />
            <Input type="text" placeholder="Nombre del Producto" required />
            <Input type="text" placeholder="Modelo/Referencia" required />
            <Input type="text" placeholder="Número de Serie (si aplica)" />
            <Input type="date" placeholder="Fecha de Compra" required />
            <Input type="text" placeholder="Número de Factura" required />
            <TextArea rows="4" placeholder="Describe aquí el motivo de tu reclamación." required />
            <Paragraph>Por favor, asegurese de cargar una imagen o foto legible de la factura de compra, para respaldar su solicitud de garantía. La imagen debe mostrar con claridad los datos del servicio o producto(s), para que podamos verificar la información y procesar su reclamación de manera efectiva y eficiente.</Paragraph>
            <FileInput type="file" accept="image/*" required />
            <ServicesButton variant="secondary"><b>Solicitar Garantía</b></ServicesButton>
          </ContactForm>
          <Paragraph>
            Con el objetivo de brindar un servicio excelente y profesional a todos sus usuarios, en <strong>Decoraciones Ortiz</strong>, buscamos cada día ser mejores en beneficio de nuestros clientes. Por ende, te invitamos a opinar y calificar nuestros servicios y accesorios, junto con los profesionales, quienes dedican su atención y conocimientos para adaptar y solucionar con precisión todas tus exigencias y requerimientos.
          </Paragraph>
          <Rating />
        </div>
      </WarrantiesContainer>
    </div>
  );
}

export default Warranties;