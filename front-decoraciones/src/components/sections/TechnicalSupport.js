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
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  margin-top: 3rem;
  margin-bottom: 0.5rem;
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
      <Paragraph>En <strong>Decoraciones Ortiz</strong>, estamos comprometidos con brindar el mejor soporte técnico a todos nuestros clientes y usuarios, para asegurarnos de que su experiencia sea óptima, cómoda, segura y garantizada.
      </Paragraph>
      <Subtitle>Contacto</Subtitle>
      <Paragraph>Puede contactarnos a través del correo <LinkStyled href="mailto:soporte.decoracionesortiz@gmail.com"><strong>soporte.decoracionesortiz@gmail.com</strong></LinkStyled> o llamando al <strong>+57 310 755 59 66</strong> para obtener más información.
      </Paragraph>
      <Subtitle>Guías y Tutoriales</Subtitle>
      <Paragraph>Contenido audiovisual: Si nuestros productos y servicios son de su gusto y comodidad, es para nosotros un gran orgullo, honor y placer que nos muestre, presuma y recomiende. Por lo cual, lo animamos a subir, compartir y opinar sobre sus nuevos productos o servicios adquiridos con nosotros a redes sociales y a dejarnos una reseña en nuestro perfil de Google; si te gustó nuestro sitio, servicio o desempeño. Así mismo, con la contratación de los servicios de instalación, mantenimeinto, reparación y garantías. Autorizamos el uso mediático de nuestro material audiovisual con los productos y servicios contratados de su solicitud y conformidad para con nuestro sitio web, esperamos con agrado, que comparta el contenido en sus medios y también con nosotros para subirlo a nuestras redes sociales.
      </Paragraph>
      <Paragraph>Visite nuestra sección para guías o tutoriales y encuentre respuestas a las preguntas más frecuentes y soluciones a los problemas más comúnes dentro de sus espacios.
      </Paragraph>
      <Subtitle>Asistencia Remota</Subtitle>
      <Paragraph>Ofrecemos asistencia remota para brindarle ayuda con la Instalación, Mantenimiento, Reparación y/o configuración para (sus) y (nuestros) productos ("Cortinas y Accesorios"). Reserve su(s) servicio(s) de preferencia, mediante el registro a través de nuestro sitio web.
      </Paragraph>
      <Subtitle>Información oportuna:</Subtitle>
      <Paragraph><strong>¿A qué tienes acceso con tu Regístro?</strong></Paragraph>
      <Paragraph>Registrarse le permite acceder a todo nuestro contenido funcional sobre productos y servicios, además de dar acceso a las solicitudes para calificar nuestro desempeño y solicitar garantías, como se indica en la página de registro. Es decir que al autentificar tu usuario, podrá acceder a la totalidad de contenido y funcionalidades de forma contínua con ingresos ilimitados, mientras dure activo su registro en este sitio web.
      </Paragraph>
      <Paragraph><strong>¿Cuáles son las condiciones de acceso?</strong></Paragraph>
      <Paragraph>Para acceder a las opciones funcionales de productos y servicios, es imprescindible tener un registro de usuario confirmado y activo para ser considerado un usuario / cliente autentificado, que cumple nuestras políticas y condiciones de uso y acceso como persona mayor de edad <strong>(18 años)</strong>, según las normas y leyes vigentes en el país (Colombia). Estas leyes SI permiten acceder a cualquier usuario (sin restricción de edad) a nuestro contenido audiovisual y comercial, como el que presentamos a todo el público en general. Sin embargo, usted mismo debe ser consciente del acceso restringido a solicitudes realizadas por menores de edad, y también de que está accediendo, ingresando y de ser el caso, regístrando sus datos en nuestro sitio web <strong>(decoracionesortiz.com)</strong>.
      </Paragraph>
      <Paragraph><strong>¿Es seguro el sistema de pago? ¿Cuál es el proceso?</strong></Paragraph>
      <Paragraph>Nuestro sitio web <strong>decoracionesortiz.com NO</strong> realiza Ni recibe pagos con tarjeta, aunque si utilizamos y manejamos de forma interna un sistema de pago por transferencia con cuenta de banco seguro y reconocido. No tiene porque preocuparse de sus datos bancarios. El proceso de pago es seguro y confiable, con un sistema de transferencia bancaria interno, que se realiza directamente y que garantiza la seguridad de sus datos y la confidencialidad de su información personal.
      </Paragraph>
      <Paragraph><strong>¿Está garantizado el anonimato con el sitio web?</strong></Paragraph>
      <Paragraph>Su anonimato está garantizado en nuestro sitio web <strong>decoracionesortiz.com</strong>; No se puede acceder a información confidencial como sus nombres y datos de contacto, ya que son almacenados, cifrados y encriptados. Con esto, garantizamos que su información queda en estricta reserva y confidencialidad.
      </Paragraph>
      <Paragraph><strong>¿Su registro tendrá alguna novedad o costo?</strong></Paragraph>
      <Paragraph>Sus datos registrados aparecerán de forma neutral y restringida en nuestro sistema y NO estarán asociados a ninguna entidad bancaria o financiera que genere algún costo o gasto en ninguno de los procesos para garantizar su tranquilidad. También es importante detallar que: ¡No habrá ninguna calificación o solicitud permitida para usuarios sin registro en el sitio web.!
      </Paragraph>
      <Paragraph><strong>¿Cómo cancelar el servicio o solicitudes realizadas?</strong></Paragraph>
      <Paragraph>No se requiere la anulación de sus datos o cambios en su regístro para la cancelación de servicios o solicitudes, pero en caso de requerir una cancelación luego de contratar un servicio o comprar un producto, debe realizarla antes del cumplimiento de <strong>2 horas (tiempo máximo)</strong>, ya que los procesos comerciales y procedimientos logísticos después de una confirmación, son procesados de forma estricta e inmediata, debido a que <strong>Decoraciones Ortiz</strong> tiene como una de sus politicas internas legales, solicitar el 50% del pago anticipado; Por ello, una cancelación equivale a un entorpecimiento de los procesos generales, logísticos y comerciales internos. Por lo cual, solicitar una (cancelación), sólo se permite única y expresamente por nuestro medio de atención <strong>"vía telefónica"</strong> llamando al teléfono <strong>+57 310 755 59 66. </strong> 
      <strong>(NO correo electrónico, NO redes sociales)</strong>, también puede encontrar estos datos disponibles en nuestro sitio web, en la sección de <strong>"Contáctanos"</strong> o en el pie de página del mismo sitio web <strong>(decoracionesortiz.com)</strong>; Estos datos se proporcionan de manera pública para comodidad de todos los usuarios y habilitan una reacción inmediata y una solución efectiva. Si requiere de más información detallada haga click en nuesto enlace de correo electrónico: <LinkStyled href="mailto:soporte.decoracionesortiz@gmail.com"><strong>soporte.decoracionesortiz@gmail.com</strong></LinkStyled>.
      </Paragraph>
    </TechnicalSupportContainer>
  );
}

export default TechnicalSupport;
