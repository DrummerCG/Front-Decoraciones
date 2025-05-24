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
    description: 'Panel japonés moderno, ideal para grandes ventanales. Precio desde: $80.000/m2',
    price: 80000
  },
  {
    image: 'panel japones/panel-japones-02.webp',
    name: 'Panel Japonés Gris',
    category: 'Panel japones',
    description: 'Panel japonés en tono gris, aporta elegancia y control solar. Precio desde: $120.000/m2',
    price: 120000
  },
  {
    image: 'panel japones/panel-japones-03.webp',
    name: 'Panel Japonés Blanco',
    category: 'Panel japones',
    description: 'Panel japonés blanco, minimalista y funcional para cualquier ambiente. Precio desde: $110.000/m2',
    price: 110000
  },
  {
    image: 'panel japones/panel-japones-04.webp',
    name: 'Panel Japonés Texturizado',
    category: 'Panel japones',
    description: 'Panel japonés con textura, ideal para dar un toque sofisticado. Precio desde: $130.000/m2',
    price: 130000
  },
  {
    image: 'panel japones/panel-japones-05.webp',
    name: 'Panel Japonés Beige',
    category: 'Panel japones',
    description: 'Panel japonés beige, combina con estilos cálidos y modernos. Precio desde: $100.000/m2',
    price: 100000
  },
  {
    image: 'panel japones/panel-japones-06.webp',
    name: 'Panel Japonés Oscuro',
    category: 'Panel japones',
    description: 'Panel japonés oscuro, máxima privacidad y diseño contemporáneo. Precio desde: $135.000/m2',
    price: 135000
  },
  {
    image: 'panel japones/panel-japones-07.webp',
    name: 'Panel Japonés Estampado',
    category: 'Panel japones',
    description: 'Panel japonés con estampado sutil, perfecto para espacios juveniles. Precio desde: $125.000/m2',
    price: 125000
  },
  {
    image: 'cortinas catalogo/img11.jpg',
    name: 'Panel Japonés Clásico',
    category: 'Panel japones',
    description: 'Panel japonés clásico, versatilidad y elegancia en un solo producto. Precio desde: $100.000/m2',
    price: 100000
  },
  {
    image: 'panel japones/panel-japones-08.webp',
    name: 'Panel Japonés Natural',
    category: 'Panel japones',
    description: 'Panel japonés en tonos naturales, ideal para ambientes relajados. Precio desde: $115.000/m2',
    price: 115000
  },
  {
    image: 'cortinas catalogo/img3.jpg',
    name: 'Cortina Enrollable Blanca',
    category: 'Cortina',
    description: 'Cortina enrollable blanca, fácil de limpiar y muy práctica. Precio desde: $90.000/m2',
    price: 90000
  },
  {
    image: 'Enrollables/enrollables01.webp',
    name: 'Cortina Enrollable Gris',
    category: 'Cortina',
    description: 'Cortina enrollable gris, perfecta para oficinas y estudios. Precio desde: $95.000/m2',
    price: 95000
  },
  {
    image: 'Enrollables/enrollables02.webp',
    name: 'Cortina Enrollable Blackout',
    category: 'Cortina',
    description: 'Cortina enrollable blackout, máxima oscuridad y privacidad. Precio desde: $110.000/m2',
    price: 110000
  },
  {
    image: 'Enrollables/enrollables03.webp',
    name: 'Cortina Enrollable Beige',
    category: 'Cortina',
    description: 'Cortina enrollable beige, aporta calidez y confort. Precio desde: $92.000/m2',
    price: 92000
  },
  {
    image: 'Enrollables/enrollables04.webp',
    name: 'Cortina Enrollable Texturizada',
    category: 'Cortina',
    description: 'Cortina enrollable con textura, diseño moderno y elegante. Precio desde: $98.000/m2',
    price: 98000
  },
  {
    image: 'Enrollables/enrollables05.webp',
    name: 'Cortina Enrollable Azul',
    category: 'Cortina',
    description: 'Cortina enrollable azul, ideal para habitaciones juveniles. Precio desde: $93.000/m2',
    price: 93000
  },
  {
    image: 'Enrollables/enrollables07.webp',
    name: 'Cortina Enrollable Verde',
    category: 'Cortina',
    description: 'Cortina enrollable verde, aporta frescura y vitalidad. Precio desde: $96.000/m2',
    price: 96000
  },
  {
    image: 'Enrollables/enrollables08.webp',
    name: 'Cortina Enrollable Estampada',
    category: 'Cortina',
    description: 'Cortina enrollable con estampado moderno, ideal para salas. Precio desde: $99.000/m2',
    price: 99000
  },
  {
    image: 'Enrollables/enrollables01.webp',
    name: 'Cortina Blackout Premium',
    category: 'Cortina',
    description: 'Cortina blackout premium, total privacidad y oscuridad. Precio desde: $130.000/m2',
    price: 130000
  },
  {
    image: 'cortinas catalogo/img4.jpg',
    name: 'Cortina Enrollable Screen',
    category: 'Cortina',
    description: 'Cortina enrollable en screen microperforado, resistente y duradera. Precio desde: $120.000/m2',
    price: 120000
  },
  {
    image: 'cortinas catalogo/img5.jpg',
    name: 'Cortina Enrollable Día y Noche',
    category: 'Cortina',
    description: 'Cortina enrollable día y noche, controla la luz a tu gusto. Precio desde: $125.000/m2',
    price: 125000
  },
  {
    image: 'cortinas catalogo/img9.jpg',
    name: 'Sheer Elegance',
    category: 'Sheer elegance',
    description: 'Cortina sheer elegance, controla la luz con elegancia. Precio desde: $100.000/m2',
    price: 100000
  },
  {
    image: 'cortinas catalogo/img1.jpg',
    name: 'Persiana Vertical Tela',
    category: 'Persiana Vertical',
    description: 'Persiana vertical de tela, ideal para grandes ventanales. Precio desde: $110.000/m2',
    price: 110000
  },
  {
    image: 'cortinas catalogo/img11.jpg',
    name: 'Persiana Vertical PVC',
    category: 'Persiana Vertical',
    description: 'Persiana vertical en PVC, fácil limpieza y gran cobertura. Precio desde: $120.000/m2',
    price: 120000
  },
  {
    image: 'Verticales/persiana-vertical-07.webp',
    name: 'Persiana Vertical Moderna',
    category: 'Persiana Vertical',
    description: 'Persiana vertical moderna, diseño actual y funcional. Precio desde: $115.000/m2',
    price: 115000
  },
  {
    image: 'Sheer elegance/sheer-elegance-01.webp',
    name: 'Sheer Elegance Blanco',
    category: 'Sheer elegance',
    description: 'Cortina sheer elegance blanca, máxima suavidad y control de luz. Precio desde: $105.000/m2',
    price: 105000
  },
  {
    image: 'Sheer elegance/sheer-elegance-05.webp',
    name: 'Sheer Elegance Gris',
    category: 'Sheer elegance',
    description: 'Cortina sheer elegance gris, elegancia y funcionalidad. Precio desde: $108.000/m2',
    price: 108000
  },
  {
    image: 'Sheer elegance/sheer-elegance-03.webp',
    name: 'Sheer Elegance Beige',
    category: 'Sheer elegance',
    description: 'Cortina sheer elegance beige, ideal para ambientes cálidos. Precio desde: $106.000/m2',
    price: 106000
  },
  {
    image: 'Sheer elegance/sheer-elegance-04.webp',
    name: 'Sheer Elegance Estampada',
    category: 'Sheer elegance',
    description: 'Cortina sheer elegance estampada, diseño exclusivo y moderno. Precio desde: $112.000/m2',
    price: 112000
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



