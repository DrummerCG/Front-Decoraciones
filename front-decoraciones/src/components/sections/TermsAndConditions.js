import React from 'react';
import styled from 'styled-components';

const TermsContainer = styled.div`
  display: grid;
  width: 80%;
  place-items: center;
  margin-top: 100px;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-family: 'Roboto', 'Arial', 'Helvetica', 'sans-serif';
  font-size: 1.5rem;
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

const OrderedList = styled.ol`
  margin-bottom: 1rem;
  text-align: left;
  font-size: 1rem;
  color: #555;
`;

const TermsAndConditions = () => {
  return (
    <TermsContainer>
      <img className='imagenfondo'
      src="/oip.jpeg"
      alt="imagen de fondo" />
      <Heading1>Términos y Condiciones de uso.</Heading1>
      <Paragraph><strong>Bienvenido(a) a Decoraciones Ortiz. Al acceder y hacer uso nuestro sitio web, usted acepta cumplir con los siguientes términos y condiciones expuestos y requeridos para todas(os) los usuarios:</strong>
      </Paragraph>
      
      <Heading2>1. ACEPTACIÓN</Heading2>
      <Paragraph>Al usar y/o visitar el sitio web <b>decoracionesortiz.com</b> (colectivamente, incluidos, entre otros, cualquier Contenido, imágenes, productos y envíos de usuarios a través de decoracionesortiz, “<b>decoracionesortiz.com</b>” como sitio web), usted acepta los términos y condiciones contenidas en este documento junto con los términos y condiciones de las Políticas de Privacidad de <b>decoracionesortiz.com</b> incorporada aquí, y todas las enmiendas y modificaciones futuras (denominadas colectivamente el “Acuerdo”). Al ingresar, usted acepta estar sujeto a estos términos y condiciones. Si no acepta estar sujeto a los términos y condiciones aquí contenidos, no podrá hacer uso de las funcionalidades y los servicios del sitio <b>decoracionesortiz.com</b>.
      </Paragraph>
      <Paragraph>Los términos y condiciones de este Acuerdo están sujetos a cambios por parte de <b>decoracionesortiz.com</b> en cualquier momento a su discreción y usted acepta estar sujeto a cualquier modificación, cambio y/o revisión. Si no acepta estar sujeto a cualquier modificación, cambio y/o revisión de este acuerdo, no podrá utilizar las funcionalidades y los servicios en <b>decoracionesortiz.com</b>.
      </Paragraph>
      <Paragraph>Los términos y condiciones contenidos en este documento se aplican a todos los usuarios de <b>decoracionesortiz.com</b>, ya sean "visitantes" o "usuarios registrados", y usted solo está autorizado a editar información dentro del sitio web y utilizar <b>decoracionesortiz.com</b> si acepta cumplir con todas las leyes aplicables y estar legalmente sujeto y obligado por los términos y condiciones de uso en este Acuerdo.
      </Paragraph>
      
      <Heading2>2. DESCRIPCIÓN</Heading2>
      <Paragraph>El sitio web <b>decoracionesortiz.com</b> permite navegar, buscar, comprar y ver en general una variedad de productos y/o accesorios, lo que permite a los usuarios registrados y no registrados visualizar, comprar y solicitar servicios adicionales en la sección (Servicios), además, <b>decoracionesortiz.com</b> presenta contenido de imágenes y enlaces relacionados a los productos y accesorios ofertados en este sitio web. <b>decoracionesortiz.com</b> permite a sus usuarios ver y acceder al contenido del sitio web, sujeto a los términos y condiciones de este Acuerdo.
      </Paragraph>
      <Paragraph>El sitio web <b>decoracionesortiz.com</b> también puede contener ciertos enlaces a sitios de terceros, que también hacen parte de la propiedad comercial, intelectual e interna y están controlados por <b>decoracionesortiz.com</b>.
      </Paragraph>
      <Paragraph><b>decoracionesortiz.com</b> asume la responsabilidad por el contenido presentado y las políticas de privacidad. Ninguna persona, empresa o entidad puede censurar o modificar el contenido de este sitio web, infringiendo las normativas por accionar de terceros. Usted reconoce que <b>decoracionesortiz.com</b> no es ni será responsable de ninguna violación que surja del uso inadecuado de este sitio web, por parte de terceros.
      </Paragraph>
      <Paragraph><b>decoracionesortiz.com</b> está pensado y desarrollado para uso personal y no puede utilizarse para ningún propósito comercial, excepto aquellos específicamente respaldados o aprobados por <b>decoracionesortiz.com</b>. Se prohíbe cualquier uso ilegal y/o no autorizado de <b>decoracionesortiz.com</b>, incluida, entre otras, la recopilación de nombres de usuario y direcciones de correo electrónico para enviar correos electrónicos no solicitados, ventanas emergentes o conexiones no autorizadas al sitio web <b>decoracionesortiz.com</b>.
      </Paragraph>
      
      <Heading2>3. ACCESO</Heading2>
      <Paragraph>Para utilizar este sitio web, usted afirma tener al menos dieciocho (18) años de edad y/o ser mayor de edad en la jurisdicción en la que reside y desde la cual accede al sitio web donde se establece la legalidad. La edad mínima requerida para el uso y navegación del sitio web puede ser menor de dieciocho (18) años. Si tiene menos de 18 años y/o está por debajo de la mayoría de edad legal en su jurisdicción de residencia y desde donde accede al sitio web, entonces solo está autorizado a utilizar el sitio web mediante navegación y NO puede realizar compras ni hacer uso de las funcionalidades específicas del sitio web.
      </Paragraph>
      
      <Heading2>4. CONDUCTA</Heading2>
      <Paragraph>Usted reconoce y acepta que es responsable de la información brindada como usuario al sitio web y de las consecuencias de transmitir o poner a disposición de terceros su información personal dentro de <b>decoracionesortiz.com</b>. Usted acepta que no (como otros que usan su cuenta) publicará, transmitirá ni pondrá a disposición de terceros en <b>decoracionesortiz.com</b> contenido que sea falso, ilegal, dañino, amenazante, abusivo, difamatorio o irrespetuoso con la privacidad, incluidos, entre otros, limitar la información personal, hacer uso de argumentos o motivos raciales. También acepta que no publicará, transmitirá ni pondrá a disposición de terceros en <b>decoracionesortiz.com</b> ningún software que contenga virus o cualquier otro código informático malicioso, archivos o programas destinados a destruir, interrumpir, limitar la funcionalidad o monitorear, realizar permanentemente seguimientos al software de computo o equipo de telecomunicaciones. Usted acepta no (como otros que usan su cuenta) publicar, transmitir o poner a disposición en <b>decoracionesortiz.com</b> ningún contenido que intencionalmente o de otra manera viole cualquier ley local, estatal, nacional o internacional aplicable, o cualquier regulación de las normas que tienen fuerza legal en el lugar donde usted reside y en otros lugares, incluidas, entre otras, las leyes o regulaciones relacionadas con la seguridad, la privacidad y los controles de exportación; emprendimiento, promoción. Usted acepta no (como otros que usan su cuenta) publicar, transmitir o poner a disposición de terceros en <b>decoracionesortiz.com</b> ningún contenido que represente actividades ilegales, que promueva o represente violencia física o moral contra cualquier grupo o individuo, o que promueva o represente cualquier acto de abuso digital ilegal; Usted acepta no utilizar <b>decoracionesortiz.com</b> de ninguna manera que exponga a <b>decoracionesortiz.com</b> a responsabilidad penal o civil.
      </Paragraph>
      <Paragraph>Usted acepta que <b>decoracionesortiz.com</b> tiene el derecho de determinar, a su entera y absoluta discreción, qué acción se debe tomar al descubrir abusos o violar los términos y condiciones aquí contenidos.
      </Paragraph>
      
      <Heading2>5. PROPIEDAD INTELECTUAL</Heading2>
      <Paragraph>El material o contenido que aparece en <b>decoracionesortiz.com</b>, tal como los Envíos al usuario, entre otros, texto, software, secuencias de comandos, gráficos, música, videos, fotografías, sonidos, funciones interactivas, marcas comerciales, marcas de servicio y logotipos contenidos en el Sitio, son propiedad de y/o con licencia para <b>decoracionesortiz.com</b>, sujeto a derechos de autor y otros derechos de propiedad intelectual establecidos bajo Leyes y convenios nacionales (colombianos) e internacionales (extranjeros). El contenido del sitio web se le proporciona TAL CUAL para su información y uso personal únicamente y no se utilizará, copiará, reproducirá, distribuirá, transmitirá, exhibirá, venderá, otorgará licencia ni explotará de otro modo para ningún otro fin sin el consentimiento previo o consentimiento escrito de los respectivos propietarios. <b>decoracionesortiz.com</b> se reserva todos los derechos no otorgados expresamente sobre el Sitio Web y el Contenido. Usted acepta no participar en el uso, copia o distribución de ningún contenido que no sea el expresamente permitido en este documento, incluido cualquier uso, copia y/o distribución de Envíos de usuarios de terceros obtenidos a través del sitio web para todos los fines comerciales. Si descarga o imprime una copia del Contenido para uso personal, debe recordar todos los avisos de derechos de autor y otros avisos de propiedad contenidos en el mismo. Usted acepta no deshabilitar, eludir ni interferir con las funciones relacionadas con la seguridad de <b>decoracionesortiz.com</b> o las funciones que impiden o restringen el uso o la copia del Contenido o imponen limitaciones en el uso del sitio web <b>decoracionesortiz.com</b> o su Contenido.
      </Paragraph>
      
      <Heading2>6. ENVÍOS DE USUARIO</Heading2> 
      <Paragraph><b>decoracionesortiz.com</b> permite el envío de productos y otras funcionalidades, así como servicios de Instalación, Mantenimiento y reparación para los usuarios. Usted comprende que, independientemente de que los usuarios publiquen o carguen sus datos o solicitudes, usted es el único responsable del debido manejo de sus datos y no debe brindarlos a ningún usuario externo. <b>decoracionesortiz.com</b> garantiza completa confidencialidad con respecto a los envíos.
      </Paragraph> 
      <Paragraph><b>decoracionesortiz.com</b> le permite vincular datos personales en el sitio web únicamente para fines personales y no comerciales. Además, <b>decoracionesortiz.com</b> proporciona una función de "PQRS", que incorpora sus propias solicitudes para mejorar la experiencia del usuario y su servicio, para permitirle acceder al material del sitio web, siempre que incluya un enlace visible al sitio web <b>decoracionesortiz.com</b> se reserva el derecho de suspender cualquier aspecto del sitio web en cualquier momento.
      </Paragraph> 
      <Paragraph>Usted es personalmente responsable de todos sus datos de usuario y de las consecuencias de publicarlos, cargarlos y publicarlos. Además, en relación con sus datos de usuario, usted afirma, representa y/o garantiza que:
      </Paragraph> 
      <Paragraph>Usted tiene el consentimiento por escrito, el permiso para brindar sus datos y/o el permiso de cada persona individualmente identificable en los datos del usuario para usar el nombre o registro de cada persona individualmente identificable para permitir la inclusión y el uso de los envíos y servicios para el usuario de la manera contemplada por el Sitio web y estos Términos de uso. Para mayor claridad, usted conserva todos sus derechos de propiedad en sus pedidos y envíos. Al brindar sus datos de Usuario a <b>decoracionesortiz.com</b>, usted otorga una licencia mundial no exclusiva, libre de regalías, no sublicenciable, para usar, reproducir, distribuir, preparar trabajos derivados, exhibir y realizar la recolección de los datos de usuarios, en relación con el sitio web <b>decoracionesortiz.com</b> y el modelo comercial del negocio, (y el de sus sucesores), incluidos, entre otros, la copia y redistribución de todo o parte del sitio <b>decoracionesortiz.com</b> (y trabajos derivados del mismo) en todos los soportes y por cualquier medio. También otorga a cada usuario del sitio <b>decoracionesortiz.com</b> una licencia no exclusiva para acceder a sus productos y envíos de usuario a través del sitio y para comprar, visualizar, solicitar servicios y generar solicitudes, mostrar y realizar dichos envíos de usuario en la medida permitida por la funcionalidad del sitio web y bajo estos Términos de uso. La licencia que otorga la página aquí, finaliza una vez que elimina su cuenta de usuario del sitio web <b>decoracionesortiz.com</b>.
      </Paragraph> 
      <Paragraph><strong>Al enviar sus datos personales de registro usted también acepta que:</strong>
      </Paragraph> 
      <OrderedList> 
          <li>no brindará datos ficticios como usuario, ni datos erróneos o incorrectos con derechos de propiedad a terceros, incluidos derechos de privacidad y publicidad, a menos que usted sea el propietario de dichos datos o tenga permiso del propietario legal para editar perfiles de usuario y conceder a <b>decoracionesortiz.com</b> todas las licencias y derechos aquí otorgados;</li> 
          <li>no publicará falsedad, mentiras o tergiversaciones que puedan dañar a <b>decoracionesortiz.com</b> o a un tercero;</li> 
          <li>no robar o usurpar la identidad de otros usuarios, ya que puede considerarse una acción ilegal, difamatoria, calumniosa, odiosa, racial o étnicamente ofensiva, que fomente conductas que se tomarían por un delito penal, darían lugar a responsabilidad civil, violarían cualquier ley o de otro modo ser inapropiado;</li> 
          <li>no publicará publicidad ni solicitudes de negocios;</li> 
          <li>no asumir o intercambiar la identidad de otra persona.</li> 
      </OrderedList> 
      <Paragraph><b>decoracionesortiz.com</b> no respalda ninguna acción sospechosa de usuarios internos o externos, ni ninguna opinión o recomendación expresada por los mismos. <b>decoracionesortiz.com</b> renuncia expresamente a cualquier responsabilidad en relación con cualquier dato falsificado de usuario. <b>decoracionesortiz.com</b> no permite actividades de infracción de derechos de autor ni de derechos de propiedad intelectual en su sitio web, y la página eliminará cualquier contenido, registros o pérfil de usuario. Y se le notificará adecuadamente que dicho contenido o datos de usuario, infringe los derechos de propiedad intelectual de otros. <b>decoracionesortiz.com</b> se reserva el derecho de eliminar cualquier contenido o pérfil de usuario sin previo aviso ni demora. <b>decoracionesortiz.com</b> también suspenderá el acceso de un usuario al sitio web, si se determina que es un infractor.
      </Paragraph> 
      <Paragraph>Usted comprende y reconoce que al utilizar <b>decoracionesortiz.com</b>, tendrá acceso como usuario a una variedad de contenido visual, y que <b>decoracionesortiz.com</b> no es responsable de la exactitud, utilidad, seguridad o derechos de propiedad intelectual en o relación con los envíos o productos de los usuarios. También comprende y reconoce que puede estar expuesto a envíos de usuarios con datos inexactos, incorrectos, modificados u objetables, y acepta renunciar, y por la presente renuncia, a cualquier derecho o recurso legal o equitativo que tenga o pueda tener. contra <b>decoracionesortiz.com</b>, con respecto a aceptar o indemnizar y eximir de responsabilidad a <b>decoracionesortiz.com</b>, sus propietarios, afiliados, operadores y/o licenciantes de licencia, inocente en la máxima medida permitida por la ley en todos los asuntos relacionados con el uso del sitio web.
      </Paragraph> 
      <Paragraph>Usted acepta que <b>decoracionesortiz.com</b> puede, a su exclusivo criterio, tener el derecho de negarse a publicar, eliminar o bloquear el acceso a cualquier envío de usuario disponible a través del sitio web <b>decoracionesortiz.com</b> u otros servicios o redes de <b>decoracionesortiz.com</b> en cualquier momento, para cualquier motivo, o sin motivo, con o sin previo aviso.
      </Paragraph> 
      <Paragraph><b>decoracionesortiz.com</b> ofrece su sitio web como un servicio a sus usuarios. Sin embargo, <b>decoracionesortiz.com</b> no asume responsabilidad alguna por monitorear los Servicios de <b>decoracionesortiz.com</b> en busca de contenido o comportamiento inapropiado. Sin embargo, si en algún momento <b>decoracionesortiz.com</b> elige, a su entera discreción, monitorear las solicitudes de servicios o envíos, <b>decoracionesortiz.com</b> NO asume ninguna responsabilidad por el contenido, ni obligación de editar o eliminar ningún contenido propio, ni responsabilidad por la conducta que los usuarios demuestran y envían en relación a dicho contenido. <b>decoracionesortiz.com</b> puede revisar y eliminar cualquier dato o perfil de usuario que, a su exclusivo criterio, viole este Acuerdo, pueda ser ofensivo, ilegal, o violar los derechos, dañar o amenazar la seguridad de cualquier usuario o persona no asociada con el sitio web (colectivamente “envío a usuario incorrecto o inapropiado, datos sospechosos o irregulares”). Usted es el único responsable de los envíos de Usuario solicitados que se hagan activos y visibles dentro del Sitio web.
      </Paragraph> 
      <Paragraph>También comprende, reconoce, acepta y autoriza específicamente a <b>decoracionesortiz.com</b> a usar, reutilizar, mostrar o cargar cualquier contribución del usuario a cualquier otro sitio web propiedad o controlado por <b>decoracionesortiz.com</b> o a cualquier sitio web en el que <b>decoracionesortiz.com</b> haya ingresado. en un acuerdo relacionado con el contenido de las Contribuciones del usuario o los imágenes promocionales. Además, cabe destacar que las Aportaciones de usuario incluyen cualquier imagen o enlace subido, ya sea promocional o relacionado con la marca. <b>decoracionesortiz.com</b> se reserva el derecho de determinar, a su discreción, sobre qué base una Contribución del usuario o una solicitud subida, podría usarse con fines de analíticos (calificación, número de vistas, número de visitas, reseñas de usuarios, comentarios, etc).
      </Paragraph>

      <Heading2>7. POLÍTICA</Heading2> 
      <Paragraph><b>decoracionesortiz.com</b> respeta una política de <b>TOLERANCIA CERO</b> hacia cualquier contenido ilegal, ni mucho menos el intento de violación de términos, estafas, fraudes, usurpación y/o cualquier otro tipo de acción ilegal. <b>decoracionesortiz.com</b> no se hará de la vista gorda ante la creación de falsos pérfiles y cooperará con todas las entidades gubernamentales que buscan a quienes violen las normativas judiciales y legales vigentes.
      </Paragraph> 
      
      <Heading2>8. TARIFAS</Heading2> 
      <Paragraph>Usted acepta que <b>decoracionesortiz.com</b> se reserva el derecho de cobrar por los productos y servicios ofrecidos, además de cambiar las tarifas de vez en cuando a su discreción, incluyendo el caso de que <b>decoracionesortiz.com</b> prescinda de su derecho a utilizar el sitio web, debido a un incumplimiento de este Acuerdo. El sitio web NO brindará ni recibirá pagos por medio de tarjetas o aplicaciones digitales (PSE). Las transferencias deben ser reconfirmadas con el personal autorizado dentro de <b>decoracionesortiz.com</b>.
      </Paragraph> 
      
      <Heading2>9. GARANTÍAS</Heading2> 
      <Paragraph>Usted declara y garantiza que cualquier información proporcionada por usted a <b>decoracionesortiz.com</b> para navegar en el sitio web <b>decoracionesortiz.com</b> es precisa, actual y que tiene todo el derecho, poder y autoridad necesarios para celebrar este acuerdo y realizar los acciones necesarias para cumplirlo.
      </Paragraph> 
      <Paragraph>Como condición de uso de <b>decoracionesortiz.com</b>, deberá aceptar los términos de la política de privacidad de <b>decoracionesortiz.com</b> y sus modificaciones. Usted reconoce y acepta que el procesamiento técnico y la transmisión del Sitio, incluidos sus envíos de usuario, pueden incluir transmisiones a través de varias redes; y cambios para adaptarse y ajustarse a los requisitos técnicos de redes y dispositivos. También reconoce y acepta que otros datos recopilados y mantenidos por <b>decoracionesortiz.com</b> con respecto a sus usuarios pueden divulgarse de acuerdo con las <b>Políticas de privacidad</b> establecidas en <b>decoracionesortiz.com</b>
      </Paragraph>

      <Heading2>10. LIMITACIÓN DE RESPONSABILIDAD</Heading2> 
      <Paragraph>USTED ACEPTA QUE EL USO DE <b>decoracionesortiz.com</b> ES BAJO SU PROPIO RIESGO. EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY, <b>decoracionesortiz.com</b>, SUS FUNCIONARIOS, DIRIGENTES, EMPLEADOS Y AGENTES RECHAZAN TODA GARANTÍA, EXPRESA O IMPLÍCITA, EN RELACIÓN CON EL SITIO WEB Y SU USO DEL MISMO. <b>decoracionesortiz.com</b> NO OFRECE NINGUNA GARANTÍA SOBRE LA EXACTITUD O INTEGRIDAD DEL CONTENIDO DE ESTE SITIO WEB O DE CUALQUIER OTRO SITIO EXTERENO ENLAZADO; Y NO ASUME NINGUNA OBLIGACIÓN O RESPONSABILIDAD EXTERNA CULPOSA.
      </Paragraph> 
      <Paragraph>No seremos responsables de cualquier daño o pérdida que surja del uso inadecuado de los procesos y funcionalidades en nuestro sitio web que haya sido realizado por terceros.
      </Paragraph> 
      <Paragraph><strong>EN NINGÚN CASO <b>decoracionesortiz.com</b>, SUS FUNCIONARIOS, DIRIGENTES, EMPLEADOS O AGENTES, SERÁN RESPONSABLES ANTE USTED POR CUALQUIER DAÑO DIRECTO, INDIRECTO, INCIDENTAL, ESPECIAL, PUNITIVO O CONSECUENTE QUE RESULTE DE CUALQUIERA DE LAS SIGUIENTES DESCRIPCIONES:</strong>
      </Paragraph> 
      <OrderedList> 
          <li>ERRORES, OMISIONES O IMPRECISIONES DEL CONTENIDO,</li> 
          <li>DAÑOS A LA PROPIEDAD, DE CUALQUIER NATURALEZA, RESULTANTES DE SU ACCESO Y USO DE NUESTRO SITIO WEB,</li> 
          <li>CUALQUIER ACCESO NO AUTORIZADO O USO DE NUESTROS SERVIDORES SEGUROS Y/O CUALQUIER INFORMACIÓN PERSONAL Y/O INFORMACIÓN FINANCIERA ALMACENADA EN EL SITIO,</li> 
          <li>CUALQUIER INTERRUPCIÓN O CESE DE TRANSMISIÓN HACIA O DESDE NUESTRO SITIO WEB,</li> 
          <li>CUALQUIER ERROR, VIRUS, CABALLOS DE TROYA O AMENAZAS SIMILARES QUE PUEDAN SER TRANSMITIDOS A O A TRAVÉS DE NUESTRO SITIO WEB POR CUALQUIER TERCERO, Y/O</li> 
          <li>CUALQUIER ERROR U OMISIÓN EN CUALQUIER CONTENIDO O POR CUALQUIER PÉRDIDA O DAÑO DE CUALQUIER TIPO INCURRIDO COMO RESULTADO DEL USO DE CUALQUIER CONTENIDO PUBLICADO, ENVIADO POR CORREO ELECTRÓNICO, TRANSMITIDO O DISPONIBLE DE OTRA MANERA A TRAVÉS DEL SITIO WEB <b>decoracionesortiz.com</b>, YA SEA BASADO EN GARANTÍA, CONTRATO, AGRAVIO O CUALQUIER OTRA TEORÍA LEGAL, Y SI LA COMPAÑÍA ES CONSCIENTE O NO DE LA POSIBILIDAD DE TALES DAÑOS.</li> 
      </OrderedList> 
      <Paragraph>ESTA LIMITACIÓN DE RESPONSABILIDAD SE APLICARÁ EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY EN LA JURISDICCIÓN APLICABLE. USTED RECONOCE ESPECÍFICAMENTE QUE <b>decoracionesortiz.com</b> NO SERÁ RESPONSABLE DE LOS ENVÍOS IRREGULARES AL USUARIO O DE LA CONDUCTA DIFAMATORIA, OFENSIVA O ILEGAL DE CUALQUIER TERCERO Y QUE EL RIESGO DE DAÑO O PERDIDA POR EL USO INADECUADO DEL SITIO DEPENDE TOTALMENTE DE USTED.
      </Paragraph>

      <Heading2>11. INDEMNIZACIÓN</Heading2> 
      <Paragraph>Usted acepta defender, indemnizar y eximir de responsabilidad a <b>decoracionesortiz.com</b>, su empresa matriz, sus funcionarios, directores, empleados y agentes contra cualquier reclamo, daño, obligación, pérdida, responsabilidad, costo o deuda y gasto (incluyendo pero no limitado a honorarios de abogados) que surjan de:
      </Paragraph> 
      <OrderedList> 
          <li>su uso y acceso al sitio web <b>decoracionesortiz.com</b>;</li> 
          <li>la violación de cualquier parámetro o norma de estos Términos y condiciones de uso;</li> 
          <li>la violación de cualquier derecho por parte de terceros, incluidos, entre otros, cualquier derecho de autor, propiedad o privacidad; O</li> 
          <li>cualquier reclamo de sus envíos o productos y datos de Usuario que causen daño a un tercero. Esta obligación de defensa e indemnización sobrevivirá a estos Términos y condiciones y a su uso del sitio web <b>decoracionesortiz.com</b>.</li> 
      </OrderedList> 
      <Paragraph>Usted afirma que tiene 18 años de edad o es un menor emancipado, o que tiene el consentimiento legal y verbal de sus padres o tutores, y que es plenamente capaz y competente para acatar y celebrar los términos, condiciones, obligaciones, afirmaciones, representaciones y garantías establecidos en estos Términos de uso, además de que usted respeta y cumple con estos Términos y condiciones contenidos en este documento.
      </Paragraph> 
      <Paragraph>Este sitio web NO GARANTIZA, RESPALDA NI ASUME RESPONSABILIDAD POR NINGÚN PRODUCTO O SERVICIO ANUNCIADO U OFRECIDO POR TERCEROS A TRAVÉS DEL SITIO WEB <b>decoracionesortiz.com</b>. Y EL MISMO, NO SERÁ RESPONSABLE DE SUPERVISAR CUALQUIER TRANSACCIÓN ENTRE USTED Y CUALQUIER TERCERO VENDEDOR O PROVEEDOR DE PRODUCTOS O SERVICIOS. CON RESPECTO A LA COMPRA DE UN PRODUCTO O SERVICIO A TRAVÉS DE CUALQUIER MEDIO O ENTORNO, USTED DEBE UTILIZAR SU MEJOR JUICIO Y CRITERIO PARA TENER PRECAUCIÓN CUANDO CORRESPONDA. LA SIGUIENTE LIMITACIÓN DE RESPONSABILIDAD SE APLICARÁ EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY EN LA JURISDICCIÓN APLICABLE. USTED RECONOCE PERSONALMENTE QUE <b>decoracionesortiz.com</b> NO SERÁ RESPONSABLE DE LOS ENVÍOS NO CONFIRMADOS, DESCONOCIDOS O FRAUDULENTOS AL USUARIO O DE LA CONDUCTA DIFAMATORIA, OFENSIVA O ILEGAL DE CUALQUIER TERCERO Y QUE EL RIESGO DE DAÑO O PERDIDA POR EL USO INADECUADO DEL SITIO WEB DEPENDE TOTALMENTE DE USTED.
      </Paragraph> 
      
      <Heading2>12. CESIÓN</Heading2> 
      <Paragraph>Los Términos y condiciones contenidos en este documento, y cualquier derecho y licencia otorgados en virtud del mismo, no pueden ser cedidos por usted, pero <b>decoracionesortiz.com</b> puede asignarlos sin restricción.
      </Paragraph> 
      <Paragraph>Si un tribunal de jurisdicción competente considera que cualquier término, cláusula o disposición de este acuerdo es inválido o inaplicable, dicha invalidez no afectará la validez o el funcionamiento de cualquier término, cláusula o disposición. Y dicho término, cláusula o disposición inválida se considerará separado de este acuerdo.
        </Paragraph> 
      
      <Heading2>Compras</Heading2> 
      <Paragraph>Al realizar una compra, usted se compromete a proporcionar información veraz y precisa. Nos reservamos el derecho de cancelar procesos de pedidos y envíos por cualquier motivo que atente contra nuestras políticas y normas establecidas en los términos y condiciones, para garantizar la seguridad del sitio web y todos sus usuarios.
        </Paragraph> 
      
      <Heading2>Uso del Sitio</Heading2> 
      <Paragraph>El contenido del sitio web es sólo del interés y uso personal o compartido de los usuarios y no comercial para externos. No puede copiar, distribuir ni modificar ningún contenido sin nuestro permiso o autorización.
        </Paragraph> 
      <Paragraph>Contenido audiovisual: Si nuestros productos y servicios son de gusto y comodidad, es para nosotros un gran orgullo, honor y placer que nos muestre, presuma y recomiende. Por lo cual, lo animamos a subir, compartir y opinar sobre sus nuevos productos o servicios adquiridos con nosotros a sus redes sociales y a dejarnos una reseña en nuestro perfil de Google si gusta de nuestro sitio web y nuestro desempeño. Así mismo, con la contratación de los servicios de instalación, mantenimeinto y reparación. Autorizamos el uso mediático de nuestro material audiovisual con los productos y servicios instalados de su solicitud y conformidad para con nuestro sitio web, esperamos con agrado, que comparta el contenido en sus medios y también con nosotros para subirlo a nuestras redes sociales. 
        </Paragraph> 
    </TermsContainer> 
    ); 
  } 
  
  export default TermsAndConditions;
