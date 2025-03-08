import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const PrivacyContainer = styled(Container)`
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
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const Heading2 = styled.h2`
  margin-top: 2rem;
  margin-bottom: 2rem;
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

const PrivacyPolicy = () => {
  return (
    <PrivacyContainer>
      <Heading1>Políticas de Privacidad</Heading1>
      <Paragraph>
      <strong>Estas son las políticas de privacidad de Decoraciones Ortiz. En este documento escrito, explicamos cómo recopilamos, usamos y protegemos su información personal para la venta, comercialización y publicación de produtos y servicios, única y expresamente para fines comerciales.</strong>
      </Paragraph>
      <Heading2>Recopilación de Información</Heading2>
      <Paragraph>
        Recopilamos información personal cuando usted se registra en nuestro sitio web <strong>(decoracionesortiz.com)</strong>, realiza un pedido, solicita un servicio, responde a una encuesta o completa un formulario.
      </Paragraph>
      <Heading2>Uso de la Información</Heading2>
      <Paragraph>
        La información que recopilamos de usted puede ser utilizada para personalizar su experiencia, mejorar nuestro sitio web, mejorar el servicio al cliente, procesar transacciones, administrar solicitudes, encuestas u otras características del sitio y enviar correos electrónicos promocionales periódicos.
      </Paragraph>
      <Heading2>Consentimiento</Heading2>
      <Paragraph>
        Al usar nuestro sitio, usted acepta nuestra política de privacidad.
        Su nombre de usuario y su dirección de correo electrónico NO se muestra a otros Usuarios, así como el contenido que usted carga, incluidos formularios, regístros, comentarios o mensajes que envía a través de la correspondencia privada de decoracionesortiz.com. Otros Usuarios NO pueden comunicarse con usted a través de mensajes privados.
      </Paragraph>
      <Paragraph>
        No utilizamos su dirección de correo electrónico ni información de identificación personal para mensajes comerciales o de marketing sin su consentimiento.
      </Paragraph>
      <Paragraph>
        Podemos utilizar su dirección de correo electrónico sin su consentimiento para fines no comerciales o administrativos (como notificarle cambios en el sitio web o para servicio al cliente).
      </Paragraph>
      <Paragraph>
        Analizamos información agregada sobre el tráfico de usuarios para ayudar a agilizar nuestras operaciones de marketing y alojamiento, para mejorar la calidad de la experiencia en decoracionesortiz.com.
      </Paragraph>
      <Heading2>Protección de la Información (Seguridad).</Heading2>
      <Paragraph>
      La norma ISO/IEC 27000 proporciona una visión general de los sistemas de gestión de seguridad de la información (ISMS). Define los términos y definiciones comúnmente utilizados en la familia de estándares ISMS. Es aplicable a todo tipo y tamaño de organización.
      </Paragraph>
      <Paragraph>
        Este documento detalla información importante sobre el uso y la NO divulgación de los datos de los usuarios recopilados en decoracionesortiz.com.
      </Paragraph>
      <Paragraph>
        Implementamos medidas de seguridad para proteger su información contra acceso no autorizado y uso indebido.
      </Paragraph>
      <Paragraph>
        Implementamos una variedad de medidas de seguridad digital, para mantener segura su información personal cuando realiza un pedido, solicita un servicio, ingresa o accede a nuestro sitio web, mediante su información personal.
      </Paragraph>
      <Paragraph>
        La seguridad de sus datos es muy importante para decoracionesortiz.com, por ello, tomamos todas las medidas adecuadas para reducir el riesgo de pérdida, daño o el uso indebido.
      </Paragraph>
      <Paragraph>
        Lamentablemente, la transmisión de información a través de Internet no es completamente segura. decoracionesortiz.com utiliza medidas de seguridad físicas, administrativas y técnicas comercialmente razonables para preservar la integridad y seguridad de su información personal. Sin embargo, no podemos asegurar ni garantizar la seguridad de la información que usted transmita a decoracionesortiz.com, y usted lo hace bajo su propio criterio.
      </Paragraph>
      <Paragraph>
        Si le hemos proporcionado (o si usted ha elegido) una contraseña que le permite acceder a determinadas partes de nuestro sitio, usted es responsable de mantener la confidencialidad de dicha contraseña. Le solicitamos que no comparta su contraseña con nadie.
      </Paragraph>
      <Heading2>Divulgación de Información</Heading2>
      <Paragraph>
        No vendemos, intercambiamos ni transferimos a terceros su información personal identificable. Esto NO incluye a terceros de confianza que nos asisten en la operación de nuestro sitio web, la comercialización de nuestros productos o la prestación de servicios. Internamente se mantiene esta información de forma confidencial.
      </Paragraph>
      <Paragraph>
        Si se le solicita, decoracionesortiz.com puede divulgar datos para cumplir con cualquier obligación legal, o para hacer cumplir nuestros Términos y condiciones de uso o cualquier otro acuerdo; ya sea para proteger los derechos, la propiedad o la seguridad de decoracionesortiz.com, nuestros usuarios registrados u otros. Esto incluye el intercambio de información con otras empresas y organizaciones, incluidas la policía y las autoridades gubernamentales, con el fin de proteger contra el fraude o cualquier otro tipo de actividad ilegal identificada o no en los Términos y condiciones de uso. Es política de decoracionesortiz.com, siempre que sea posible y legalmente permisible, informarle de inmediato sobre cualquier obligación de proporcionar datos a un tercero legalmente constituido.
      </Paragraph>
      <Paragraph>
        Si intenta modificar (sin autorización) cualquier material de propiedad intelectual interna, decoracionesortiz.com revelará cualquier información disponible a las autoridades pertinentes y sin previo aviso.
      </Paragraph>
      <Paragraph>
        No compartimos su información de identificación personal (como su nombre o dirección de correo electrónico) con otras empresas de terceros para fines comerciales o de marketing sin su consentimiento, excepto en un programa o función específica en la que tenga la opción de participar o no.
      </Paragraph>
      <Heading2>Sus Derechos</Heading2>
      <Paragraph>
        Usted tiene derecho a acceder y corregir sus datos haciéndolo directamente en el sitio web o solicitandolo a través de la sección <strong>"Contáctanos"</strong>.
      </Paragraph>
      <Paragraph>
        Este sitio brinda y permite una libre navegación para comodidad de sus usuarios. Las acciones dentro de la página requieren de un previo registro para una segura actualización de datos, la confirmación de envíos y/o entregas en los productos, accesorios y ejecución de servicios.
      </Paragraph>
      <Paragraph>
        Es su derecho y su deber, brindar información real y <strong>NO FICTICIA</strong> dentro del sitio web, para evitar posibles errores en los procesos, confusiones logísticas o fraudes legales que afecten la integridad informativa de otros usuarios y sus cuentas de regístro. Si tiene alguna pregunta o inquietud acerca de nuestra política de privacidad, por favor dirijase a nosotros a través de la sección <strong>"Contáctanos"</strong>.
        </Paragraph>
    </PrivacyContainer>
  );
}

export default PrivacyPolicy;