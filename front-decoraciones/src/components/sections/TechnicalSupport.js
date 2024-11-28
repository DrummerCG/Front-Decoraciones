import React from 'react';
import styled from 'styled-components';

const TechnicalSupportContainer = styled.div`
  margin-top: 100px;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #444;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const LinkStyled = styled.a`
  color: #0AA1DD;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const TechnicalSupport = () => {
  return (
    <TechnicalSupportContainer>
      <Title>Soporte Técnico y Ayuda / (preguntas frecuentes).</Title>
      <Paragraph>En Decoraciones Ortiz, estamos comprometidos con brindarle el mejor soporte técnico para asegurarnos de que su experiencia sea óptima y cómoda.</Paragraph>
      <Subtitle>Contacto</Subtitle>
      <Paragraph>Puede contactarnos a través del correo <LinkStyled href="mailto:contacto@decoracionesortiz.com"><strong>contacto@decoracionesortiz.com</strong></LinkStyled> o llamando al +57 310 755 59 66.</Paragraph>
      <Subtitle>Guías y Tutoriales</Subtitle>
      <Paragraph>Contenido audiovisual: Si nuestros productos y servicios son de gusto y comodidad, es para nosotros un gran orgullo, honor y placer que nos muestre, presuma y recomiende. Por lo cual, lo animamos a subir, compartir y opinar sobre sus nuevos productos o servicios adquiridos con nosotros a redes sociales y a dejarnos una reseña en nuestro perfil de Google si te gustó nuestro sitio y nuestro desempeño. Así mismo, con la contratación de los servicios de instalación, mantenimeinto y reparación. Autorizamos el uso mediático de nuestro material audiovisual con los productos y servicios instalados de su solicitud y conformidad para con nuestro sitio web, esperamos con agrado, que comparta el contenido en sus medios y también con nosotros para subirlo a nuestras redes sociales.</Paragraph>
      <Paragraph>Visite nuestra seccións para guías o tutoriales y encuentre respuestas a las preguntas más frecuentes y soluciones a problemas comunes en sus espacios.</Paragraph>
      <Subtitle>Asistencia Remota</Subtitle>
      <Paragraph>Ofrecemos asistencia remota para brindarle ayuda con la Instalación, Mantenimiento, Reparación y/o configuración para (sus) y (nuestros) productos ("Cortinas y Accesorios"). Reserve su(s) servicio(s) de preferencia, mediante el registro a través de nuestro sitio web.</Paragraph>
      <Subtitle>Información oportuna:</Subtitle>
      <Paragraph><strong>¿A qué tienes acceso con tu Regístro?</strong></Paragraph>
      <Paragraph>Registrarse le permite acceder a todo nuestro contenido funcional sobre productos y servicios, además de dar acceso a las solicitudes para calificar nuestro desempeño y solicitar garantías, como se indica en la página de registro. Es decir que al autentificar tu usuario, podrá acceder a la totalidad de contenido y funcionalidades de forma contínua con ingresos ilimitados, mientras dure activo su registro en este sitio web.</Paragraph>
      <Paragraph><strong>¿Cuáles son las condiciones de acceso?</strong></Paragraph>
      <Paragraph>Para acceder a las opciones funcionales de productos y servicios, es imprescindible tener un registro de usuario confirmado y activo, para ser considerado un usuario / cliente autentificado que cumple nuestras políticas y condiciones como persona mayor de edad (18 años), según las normas y leyes vigentes en el país (Colombia). Las leyes del país también deben permitir acceder a contenido audiovisual comercial, como el que presentamos a todo el público en general. Usted mismo debe ser consciente de que está accediendo, ingresando y de ser el caso, regístrando sus datos en nuestro sitio (decoracionesortiz.com).</Paragraph>
      <Paragraph><strong>¿Es seguro el sistema de pago? ¿Cuál es el proceso?</strong></Paragraph>
      <Paragraph>Nuestro sitio web decoracionesortiz.com NO realiza Ni recibe pagos con tarjeta, aunque si utiliza y maneja de forma interna un sistema de pago por transferencia con cuenta banco seguro y reconocido. No tiene porque preocuparse de sus datos bancarios.</Paragraph>
      <Paragraph><strong>¿Está garantizado el anonimato con el sitio web?</strong></Paragraph>
      <Paragraph>Su anonimato está garantizado en nuestro sitio decoracionesortiz.com; No se puede acceder a información confidencial como sus nombres y datos de contacto. Con esto, queremos garantizar su estricta reserva y confidencialidad.</Paragraph>
      <Paragraph><strong>¿Su registro tendrá alguna novedad o costo?</strong></Paragraph>
      <Paragraph>Sus datos registrados aparecerán de forma neutral y restringida en nuestro sistema y NO estarán asociados a ninguna entidad bancaria o financiera que genere algún costo o gasto en ninguno de los procesos, para garantizar su tranquilidad. ¡No habrá ninguna calificación o solicitud permitida para usuarios sin registro en el sitio.!</Paragraph>
      <Paragraph><strong>¿Cómo cancelar el servicio o solicitudes realizadas?</strong></Paragraph>
      <Paragraph>No se requiere la cancelación de su registro, pero en caso de solicitarlo, puede hacerlo por cualquiera de nuestros medios digitales (redes sociales), simplemente utilice los enlaces disponibles para solicitudes o en el pie de página del sitio web (decoracionesortiz.com), los cuales se proporcionan de manera pública y hacen posible enviar un correo electrónico / un whatsapp / mensaje de facebook / instagram. o haga clic en este enlace: <LinkStyled href="mailto:contacto@decoracionesortiz.com"><strong>contacto@decoracionesortiz.com</strong></LinkStyled></Paragraph>
    </TechnicalSupportContainer>
  );
}

export default TechnicalSupport;
