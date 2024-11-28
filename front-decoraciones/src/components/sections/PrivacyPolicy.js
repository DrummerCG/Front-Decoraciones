import React from 'react';
import styled from 'styled-components';

const PrivacyContainer = styled.div`
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

const LinkStyled = styled.a`
  color: #0AA1DD;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const PrivacyPolicy = () => {
  return (
    <PrivacyContainer>
      <Heading1>Políticas de Privacidad</Heading1>
      <Paragraph>En Decoraciones Ortiz, valoramos su privacidad y nos comprometemos a proteger su información personal, así como los productos y servicios brindados a cada usuario. Siendo este, un documento que describe cómo recopilamos, utilizamos y protegemos su información.</Paragraph>
      <Paragraph>Este sitio limita expresa y estrictamente sus registros y/o privilegios, el proceso de autentificación permite exclusivamente la visualización, creación y envío de peticiones, quejas, reclamaciones, solicitudes (PQRS) e incluso comentarios y calificaciones sobre nuestros productos y servicios a personas mayores de 18 años que hayan alcanzado la mayoría de edad en su comunidad. Cualquier persona puede ingresar a este sitio aunque no cumpla con estos criterios, pero tiene prohibido editar el contenido de las solicitudes para este sitio sin previo registro. No buscamos obtener ni recopilar información o datos personales de personas que no hayan alcanzado la mayoría de edad.</Paragraph>

      <Heading2>Recopilación de Información</Heading2>
      <Paragraph>Recopilamos información personal como su nombre, dirección y correo electrónico cuando realiza una compra o se registra en nuestro sitio web.</Paragraph>
      <Paragraph>Información personal: para solicitar productos o servicios al personal autorizado, cumpliendo con criterios específicos internos y comerciales, usted puede brindar información personal adicional, como puede ser nombre de persona encargada, número telefónico secundario, número de transacción y otros de manera voluntaria después del registro. Todos los datos de registro, excepto la dirección de correo electrónico y la dirección IP, se convierten en información de acceso protegido.</Paragraph>
      <Paragraph>Contenido subido al sitio: Cualquier información personal que usted registre voluntariamente en línea, NO estará disponible públicamente y NO puede ser recopilado y utilizado por otros.</Paragraph>
      <Paragraph>Cookies: Cuando visite decoracionesortiz.com, podremos enviar una o más cookies a su computadora que únicamente identifican la sesión de su navegador. decoracionesortiz.com utiliza tanto cookies de sesión como cookies persistentes.</Paragraph>
      <Paragraph>Información de inicio de sesión: Cuando visita decoracionesortiz.com, nuestros servidores registran automáticamente cierta información enviada por su navegador de Internet, como sus solicitudes de Internet, su dirección IP, su tipo de navegador, el idioma de su navegador, la URL de referencia, el tipo de plataforma, los nombres de dominio y la fecha y hora de sus solicitudes.</Paragraph>
      <Paragraph>Correos electrónicos: si se comunica con nosotros, podremos conservar un registro de dicha correspondencia.</Paragraph>

      <Heading2>Uso de la Información</Heading2>
      <Paragraph>Utilizamos su información para procesar sus pedidos, enviar actualizaciones o promociones, y mejorar nuestros servicios.</Paragraph>
      <Paragraph>Su información de identificación personal enviada a decoracionesortiz.com se utiliza para proporcionar las funciones del sitio web, así como funciones personalizadas especiales para el usuario.</Paragraph>
      <Paragraph>Su nombre de usuario y su dirección de correo electrónico NO se muestra a otros Usuarios, así como el contenido que usted carga, incluidos imágenes, comentarios, @, mensajes que envía a través de la correspondencia privada de decoracionesortiz.com, etc. Otros Usuarios NO pueden comunicarse con usted a través de mensajes privados.</Paragraph>
      <Paragraph>No utilizamos su dirección de correo electrónico ni información de identificación personal para mensajes comerciales o de marketing sin su consentimiento.</Paragraph>
      <Paragraph>Podemos utilizar su dirección de correo electrónico sin su consentimiento para fines no comerciales o administrativos (como notificarle cambios en el sitio web o para servicio al cliente).</Paragraph>
      <Paragraph>Analizamos información agregada sobre el tráfico de usuarios para ayudar a agilizar nuestras operaciones de marketing y alojamiento y para mejorar la calidad de la experiencia en decoracionesortiz.com.</Paragraph>

      <Heading2>Protección de la Información (Seguridad)</Heading2>
      <Paragraph>Este documento detalla información importante sobre el uso y la divulgación de los datos de los usuarios recopilados en decoracionesortiz.com.</Paragraph>
      <Paragraph>Implementamos medidas de seguridad para proteger su información contra acceso no autorizado y uso indebido.</Paragraph>
      <Paragraph>La seguridad de sus datos es muy importante para decoracionesortiz.com, para ello, tomamos todas las medidas adecuadas y reducir el riesgo de pérdida, daño o el uso indebido.</Paragraph>
      <Paragraph>Lamentablemente, la transmisión de información a través de Internet no es completamente segura. decoracionesortiz.com utiliza medidas de seguridad físicas, administrativas y técnicas comercialmente razonables para preservar la integridad y seguridad de su información personal. Sin embargo, no podemos asegurar ni garantizar la seguridad de la información que usted transmita a decoracionesortiz.com, y usted lo hace bajo su propio riesgo.</Paragraph>
      <Paragraph>Si le hemos proporcionado (o si usted ha elegido) una contraseña que le permite acceder a determinadas partes de nuestro sitio, usted es responsable de mantener la confidencialidad de dicha contraseña. Le solicitamos que no comparta su contraseña con nadie.</Paragraph>

      <Heading2>Divulgación de Información</Heading2>
      <Paragraph>Si se le solicita, decoracionesortiz.com puede divulgar datos para cumplir con cualquier obligación legal, o para hacer cumplir nuestros Términos y condiciones de uso o cualquier otro acuerdo; ya sea para proteger los derechos, la propiedad o la seguridad de decoracionesortiz.com, nuestros usuarios registrados u otros. Esto incluye el intercambio de información con otras empresas y organizaciones, incluidas la policía y las autoridades gubernamentales, con el fin de proteger contra el fraude o cualquier otro tipo de actividad ilegal identificada o no en los Términos y condiciones de uso. Es política de decoracionesortiz.com, siempre que sea posible y legalmente permisible, informarle de inmediato sobre cualquier obligación de proporcionar datos a un tercero.</Paragraph>
      <Paragraph>Si intenta modificar cualquier material de propiedad intelectual interna, decoracionesortiz.com revelará cualquier información disponible a las autoridades pertinentes y sin previo aviso.</Paragraph>
      <Paragraph>No compartimos su información de identificación personal (como su nombre o dirección de correo electrónico) con otras empresas de terceros para fines comerciales o de marketing sin su consentimiento o excepto en un programa o función específica en la que tenga la opción de participar o no.</Paragraph>
      
      <Heading2>Sus Derechos</Heading2>
      <Paragraph>Usted tiene derecho a acceder y corregir sus datos haciéndolo directamente en el sitio web o solicitandolo a través de la sección Contáctanos.</Paragraph>
      <Paragraph>Este sitio brinda y permite una libre navegación para comodidad de sus usuarios. Las acciones dentro de la página requieren de un previo registro para una segura actualización de datos y la confirmación de envíos y/o entregas en los productos y accesorios.</Paragraph>
    </PrivacyContainer>
  );
}

export default PrivacyPolicy;
