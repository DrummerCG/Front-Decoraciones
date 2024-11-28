import React from 'react';
import styled from 'styled-components';

const CopyrightContainer = styled.div`
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
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`;

const List = styled.ol`
  margin-bottom: 1rem;
  text-align: left;
  font-size: 1rem;
  color: #555;
`;

const LinkStyled = styled.a`
  color: #0AA1DD;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = () => {
  return (
    <CopyrightContainer>
      <Heading1>AVISO DE INFRACCIÓN DE DERECHOS DE AUTOR</Heading1>
      <Paragraph>© 2024 CONEX - (GEKCO) / Decoraciones Ortiz. Todos los derechos reservados.</Paragraph>
      <Paragraph>
        Todo el contenido de este sitio web, incluyendo, sin limitación, textos, gráficos, logotipos, iconos de botones, imágenes, vídeos, clips de audio, descargas digitales y compilaciones de datos, es propiedad exclusiva de Decoraciones Ortiz o de sus proveedores productivos y está protegido por las leyes internacionales de derechos de autor y por las disposiciones de la Dirección Nacional de Derechos de Autor (DNDA) de Colombia.
        <br />
        Contenido audiovisual: Si nuestros productos y servicios son de gusto y comodidad, es para nosotros un gran orgullo, honor y placer que nos muestre, presuma y recomiende. Por lo cual, lo animamos a subir, compartir y opinar sobre sus nuevos productos o servicios adquiridos con nosotros a redes sociales y a dejarnos una reseña en nuestro perfil de Google si te gustó nuestro sitio y nuestro desempeño. Así mismo, con la contratación de los servicios de instalación, mantenimeinto y reparación. Autorizamos el uso mediático de nuestro material audiovisual con los productos y servicios instalados de su solicitud y conformidad para con nuestro sitio web, esperamos con agrado, que comparta el contenido en sus medios y también con nosotros para subirlo a nuestras redes sociales. 
      </Paragraph>
      <Paragraph>
        Se prohíbe la reproducción total o parcial, copia, distribución, transmisión, adaptación, traducción, modificación, comunicación pública o cualquier otro uso del contenido de este sitio web sin la previa autorización expresa y por escrito de sus desarrolladores (CONEX) y Decoraciones Ortiz. Cualquier uso no autorizado de este contenido puede violar las leyes de derechos de autor y otras leyes aplicables.
      </Paragraph>
      <Paragraph>
        Decoraciones Ortiz se reserva el derecho de tomar las acciones legales que considere necesarias y pertinentes, para proteger sus derechos de propiedad elemental e intelectual en materia informática - digital en este sitio web.
      </Paragraph>
      <Paragraph>
        Para obtener permiso de utilizar cualquier contenido de este sitio web de manera particular, por favor contacte a: <LinkStyled href="mailto:contacto@decoracionesortiz.com">contacto@decoracionesortiz.com</LinkStyled>.
      </Paragraph>

      <Heading2>Procedimiento para Informar Sobre Infracción de Derechos de Autor</Heading2>
      <Paragraph>
        De conformidad con la Ley 23 de 1982 y demás normativas aplicables sobre derechos de autor en Colombia, si usted cree que su trabajo ha sido copiado de una manera que constituya una violación de derechos de autor, por favor proporcione a nuestro Agente de Derechos de Autor la siguiente información por escrito:
      </Paragraph>
      <List>
        <li>Una firma electrónica o física de la persona autorizada para actuar en nombre del propietario del derecho de autor.</li>
        <li>Una descripción de la obra protegida por el derecho de autor que usted alega ha sido infringida.</li>
        <li>Una descripción de dónde se encuentra ubicado en nuestro sitio el material que usted alega que está infringiendo el derecho de autor.</li>
        <li>Su dirección, número de teléfono y correo electrónico.</li>
        <li>Una declaración suya de que tiene una creencia de buena fe de que el uso disputado no está autorizado por el propietario del derecho de autor, su agente o la ley.</li>
        <li>Una declaración suya, hecha bajo pena de perjurio, de que la información anterior en su aviso es precisa y que usted es el propietario del derecho de autor o está autorizado para actuar en nombre del propietario del derecho de autor.</li>
      </List>
      <Paragraph>
        Para notificaciones de reclamaciones de infracción de derechos de autor, puede contactar a Decoraciones Ortiz en <LinkStyled href="mailto:contacto@decoracionesortiz.com">contacto@decoracionesortiz.com</LinkStyled>. Responderemos con celeridad a las reclamaciones que se informen a este correo.
      </Paragraph>
      <Paragraph>
        Tenga en cuenta que, de conformidad con la ley, cualquier persona que tergiverse materialmente, a sabiendas, que el material o la actividad infringe derechos de autor puede estar sujeta a responsabilidad. Decoraciones Ortiz se reserva el derecho, a su sola y absoluta discreción, de eliminar contenido y cancelar cuentas de usuarios que infrinjan, o parezcan infringir, la propiedad intelectual u otros derechos de terceros.
      </Paragraph>

      <Heading2>Información de Contacto de Derechos de Autor</Heading2>
      <Paragraph>
        Si prefiere contactarse por correo postal o electrónico, puede hacerlo aquí:
        <br />
        Dirección Nacional de Derechos de Autor (DNDA)
        <br />
        <LinkStyled href="https://www.derechodeautor.gov.co">https://www.derechodeautor.gov.co</LinkStyled>
        <br />
        Pedimos disculpas por cualquier tipo de abuso o inconformidad con nuestro servicio y nos comprometemos a hacer todo lo posible para encontrar y aplicar los correctivos pertinentes.
      </Paragraph>
    </CopyrightContainer>
  );
};

export default Copyright;
