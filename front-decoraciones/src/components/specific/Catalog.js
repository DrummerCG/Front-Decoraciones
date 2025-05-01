import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import SearchResults from "./SearchResults";
/*import { Button } from "react-bootstrap";*/
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/specific/Catalog.css';
import styled from 'styled-components';

const CatalogContainer = styled.div`
  width: 90%;
  margin-top: 100px;
  text-align: center;
  padding: 0 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color:rgba(105, 103, 103, 0.21);
  position: relative;
  overflow: hidden; /* Asegura que la imagen de fondo no se desborde */
`;


const listaProductosMock = [
  {
    image: 'cortinas catalogo/img1.jpg',
    name: 'Panel Japonés',
    category: 'Panel japones',
    description: <h1 className="catalogo1">Protección Solar Inteligente y con Estilo, Precio desde los $80.000 m2</h1>,
  },

  {
    image: 'panel japones/panel-japones-02.webp',
    name: 'Panel Japones ',
    category: 'Panel japones',
    description: <h2 className="catalogo1">Minimalismo y Funcionalidad en tu Ventana, 300cm x 250cm, $800.000</h2>
  },

  {
    image: 'panel japones/panel-japones-03.webp',
    name: 'Panel Japones ',
    category: 'Panel japones',
    description: <h2 className="catalogo1">Minimalismo y Funcionalidad en tu Ventana, 300cm x 250cm, $800.000</h2>
  },

  {
    image: 'panel japones/panel-japones-04.webp',
    name: 'Panel Japones ',
    category: 'Panel japones',
    description: <h2 className="catalogo1">Minimalismo y Funcionalidad en tu Ventana, 300cm x 250cm, $800.000</h2>
  },

  {
    image: 'panel japones/panel-japones-05.webp',
    name: 'Panel Japones ',
    category: 'Panel japones',
    description: <h2 className="catalogo1">Minimalismo y Funcionalidad en tu Ventana, 300cm x 250cm, $800.000</h2>
  },

  {
    image: 'panel japones/panel-japones-06.webp',
    name: 'Panel Japones ',
    category: 'Panel japones',
    description: <h2 className="catalogo1">Minimalismo y Funcionalidad en tu Ventana, 300cm x 250cm, $800.000</h2>
  },

  {
    image: 'panel japones/panel-japones-07.webp',
    name: 'Panel Japones ',
    category: 'Panel japones',
    description: <h2 className="catalogo1">Minimalismo y Funcionalidad en tu Ventana, 300cm x 250cm, $800.000</h2>
  },

  {
    image: 'cortinas catalogo/img11.jpg',
    name: 'Panel Japones ',
    category: 'Panel japones',
    description: <h2 className="catalogo1">Minimalismo y Funcionalidad en tu Ventana, 300cm x 250cm, $800.000</h2>
  },

  {
    image: 'panel japones/panel-japones-08.webp',
    name: 'Panel Japones ',
    category: 'Panel japones',
    description: <h2 className="catalogo1">Minimalismo y Funcionalidad en tu Ventana, 300cm x 250cm, $800.000</h2>
  },

  {
    image: 'cortinas catalogo/img3.jpg',
    name: 'Cortina Enrollable ',
    category: 'Cortina',
    description: <h3 className="catalogo1">La Practicidad y versatilidad que Buscabas, 240cm x 180cm, $140.000</h3>
  },

  {
    image: 'Enrollables/enrollables01.webp',
    name: 'Cortina Enrollable ',
    category: 'Cortina',
    description: <h3 className="catalogo1">La Practicidad y versatilidad que Buscabas, 240cm x 180cm, $140.000</h3>
  },

  {
    image: 'Enrollables/enrollables02.webp',
    name: 'Cortina Enrollable ',
    category: 'Cortina',
    description: <h3 className="catalogo1">La Practicidad y versatilidad que Buscabas, 240cm x 180cm, $140.000</h3>
  },

  {
    image: 'Enrollables/enrollables03.webp',
    name: 'Cortina Enrollable ',
    category: 'Cortina',
    description: <h3 className="catalogo1">La Practicidad y versatilidad que Buscabas, 240cm x 180cm, $140.000</h3>
  },

  {
    image: 'Enrollables/enrollables04.webp',
    name: 'Cortina Enrollable ',
    category: 'Cortina',
    description: <h3 className="catalogo1">La Practicidad y versatilidad que Buscabas, 240cm x 180cm, $140.000</h3>
  },

  {
    image: 'Enrollables/enrollables05.webp',
    name: 'Cortina Enrollable ',
    category: 'Cortina',
    description: <h3 className="catalogo1">La Practicidad y versatilidad que Buscabas, 240cm x 180cm, $140.000</h3>
  },

  {
    image: 'Enrollables/enrollables07.webp',
    name: 'Cortina Enrollable ',
    category: 'Cortina',
    description: <h3 className="catalogo1">La Practicidad y versatilidad que Buscabas, 240cm x 180cm, $140.000</h3>
  },

  {
    image: 'Enrollables/enrollables08.webp',
    name: 'Cortina Enrollable ',
    category: 'Cortina',
    description: <h3 className="catalogo1">La Practicidad y versatilidad que Buscabas, 240cm x 180cm, $140.000</h3>
  },


  {
    image: 'Enrollables/enrollables01.webp',
    name: 'Cortina Enrollabl',  
    category: 'Cortina',
    description: <h4 className="catalogo1"> Cortina Blackout, Total Privacidad y Oscuridad, 160cm x 180cm, $250.000 </h4>
  },

  {
    image: 'cortinas catalogo/img4.jpg',
    name: 'Cortina enrollable en screen',
    Category: 'Cortina',
    description: <h5 className="catalogo1">Tejido Screen Microperforado, Resistente y Duradero, 120cm x220cm, $220.000 </h5>
  },
  {
    image: 'cortinas catalogo/img5.jpg',
    name: 'Cortina Enrollable en Screen',
    category: 'Cortina',
    description: <h6 className="catalogo1">Privacidad Durante el Día y la Noche, 140cm x 230cm, $239.000 </h6>
  },
  {
    image: 'cortinas catalogo/img9.jpg',
    category: 'sher elegance',
    name: 'sher elegance',
    description: <h7 className="catalogo1">Controla tu Luz con Eleganci6a y Estilo, 130cm x 180cm, $200.000 </h7>
  },
  {
    image: 'cortinas catalogo/img1.jpg',
    Category: 'Persiana Vertical',
    name: 'Persiana Verticales',
    description: <h8 className="catalogo1">Persiana Vertical de Tela, 160cm x 220cm, $300.000 </h8>
  },
  {
    image: 'cortinas catalogo/img11.jpg',
    Category: 'Persiana Vertical',
    name: 'Persiana Verticals',
    description: <h9 className="catalogo1">Cortinas pvc de Facil Limpieza y Gran Cobertura, 200cm x 215cm, $350.000 </h9>
  },
  {
    image: 'Verticales/persiana-vertical-07.webp',
    Category: 'Persiana Vertical',
    name: 'Persiana Verticales',
    description: <h10 classsName="catalogo1">No incluye el candelabro </h10>
  },
  {
    image: 'verticales/persiana-vertical-04.webp',
    Category: 'Persiana Vertical',
    name: 'Persiana Verticales',
    description: <h11 className="catalogo1">No incluye el candelabro </h11>
  },
  {
    image: 'https://media.istockphoto.com/photos/fabric-grunge-picture-id175499634?k=6&m=175499634&s=612x612&w=0&h=BgLJOai2ZCydJ0Eo9KAiUmgcA9P35NM89jhiTBnz2Mc=',
    name: 'Cortina con destroyer (triplicado)',
    description: 'La mejor opción para ventilación natural.'
  },
];

const Catalog = () => {
  const [] = useState(listaProductosMock);
  const [, changeIsOpen] = useState(true); 


  /*
  useEffect(() => {
    // Realiza la solicitud al montar el componente
    axios.get("http://localhost:3001/productos")
      .then(response => {
        setProducts(response.data); // Actualiza el estado con los datos obtenidos
      })
      .catch(error => {
        console.error("Error al obtener los productos:", error);
      });
  }, [products]); // El segundo argumento vacío asegura que se ejecute solo una vez al montar el componente
  */
  const [products] = useState(listaProductosMock);
  return (
    <CatalogContainer style={{ marginTop: '100px' }}>
      <img className='imagenfondo'
      src="/oip.jpeg"
      alt="imagen de fondo" />
    <div className="CatalogContainer">
      <Container>
      <div id='formulario de busqueda' className="row">
          <h1 className="catalogo-title">Catalogo Decoraciones Ortiz</h1>
          <h2 className="catalogo-description">Encuentra la cortina perfecta para cada espacio en nuestro catálogo, descubre diseños innovadores y soluciones funcionales que realzarán la belleza de tus ventanas y te brindarán el confort que mereces</h2>
        </div>
        <div id='catalog-buttons' className="row botones-principales">
          <Button variant="primary" className="asesorias1">Asesorias</Button>
          <Button variant="success" className="boton-de-compra">Comprar</Button>
          <Button variant="info" className="Agg-carrito">Agregar al carrito</Button>
        </div>
        <div id="resultado de busqueda" className="row">
          <SearchResults products={products}/>
        </div>
      </Container>
    </div>
  </CatalogContainer>
   
  );
}


Catalog.propTypes = {};
export default Catalog;



