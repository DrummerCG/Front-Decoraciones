import React, { useEffect, useState } from "react";
import SearchCriteria from './SearchCriteria'; // Importa el componente SearchCriteria
import axios from "axios";
import SearchResults from "./SearchResults"; // Importa el componente SearchResults
import { Button } from "react-bootstrap";
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
  background-color: #f9f9f9;
  position: relative;
  overflow: hidden; /* Asegura que la imagen de fondo no se desborde */
`;

const listaProductosMock = [
  {
    image: 'https://th.bing.com/th/id/OIP.qIBf-OUCNBZHTqPpIreY5wHaHa?rs=1&pid=ImgDetMain',
    name: 'Cortina blackout',
    description: 'No incluye el candelabro.'
  },
  {
    image: 'https://th.bing.com/th/id/OIP.lGe-Mmsw6c6zRufekKPY-wHaFj?rs=1&pid=ImgDetMain',
    name: 'Cortina de humo',
    description: 'Te oculta de cualquier enemigo.'
  },
  {
    image: 'https://media.istockphoto.com/photos/fabric-grunge-picture-id175499634?k=6&m=175499634&s=612x612&w=0&h=BgLJOai2ZCydJ0Eo9KAiUmgcA9P35NM89jhiTBnz2Mc=',
    name: 'Cortina con destroyer.',
    description: 'La mejor opción para ventilación natural.'
  },
  {
    image: 'https://th.bing.com/th/id/OIP.qIBf-OUCNBZHTqPpIreY5wHaHa?rs=1&pid=ImgDetMain',
    name: 'Cortina blackout (duplicado)',
    description: 'No incluye el candelabro.'
  },
  {
    image: 'https://th.bing.com/th/id/OIP.lGe-Mmsw6c6zRufekKPY-wHaFj?rs=1&pid=ImgDetMain',
    name: 'Cortina de humo (duplicado)',
    description: 'Te oculta de cualquier enemigo.'
  },
  {
    image: 'https://media.istockphoto.com/photos/fabric-grunge-picture-id175499634?k=6&m=175499634&s=612x612&w=0&h=BgLJOai2ZCydJ0Eo9KAiUmgcA9P35NM89jhiTBnz2Mc=',
    name: 'Cortina con destroyer (duplicado)',
    description: 'La mejor opción para ventilación natural.'
  },
  {
    image: 'https://th.bing.com/th/id/OIP.qIBf-OUCNBZHTqPpIreY5wHaHa?rs=1&pid=ImgDetMain',
    name: 'Cortina blackout (triplicado)',
    description: 'No incluye el candelabro.'
  },
  {
    image: 'https://th.bing.com/th/id/OIP.lGe-Mmsw6c6zRufekKPY-wHaFj?rs=1&pid=ImgDetMain',
    name: 'Cortina de humo (triplicado)',
    description: 'Te oculta de cualquier enemigo.'
  },
  {
    image: 'https://media.istockphoto.com/photos/fabric-grunge-picture-id175499634?k=6&m=175499634&s=612x612&w=0&h=BgLJOai2ZCydJ0Eo9KAiUmgcA9P35NM89jhiTBnz2Mc=',
    name: 'Cortina con destroyer (triplicado)',
    description: 'La mejor opción para ventilación natural.'
  },
];

const Catalog = () => {
  const [products, setProducts] = useState(listaProductosMock);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Realiza la solicitud al montar el componente
    axios.get("http://localhost:3001/productos")
      .then(response => {
        setProducts(response.data); // Actualiza el estado con los datos obtenidos
      })
      .catch(error => {
        console.error("Error al obtener los productos:", error);
      });
  }, []); // El segundo argumento vacío asegura que se ejecute solo una vez al montar el componente

  return (
    <CatalogContainer style={{ marginTop: '100px' }}>
      <img className='imagenfondo'
           src="/oip.jpeg"
           alt="imagen de fondo"
      />
      <div id='catalog-buttons' className="row mb-3">
        <Button variant="success" className="m-2">Comprar</Button>
        <Button variant="info" className="m-2">Agregar al carrito</Button>
      </div>
      <div id='formulario de busqueda' className="row">
        <p>Catálogo</p>
        <label>{"Los más vistos " + (isOpen ? "abierto" : "cerrado")}</label>
        <Button onClick={() => { setIsOpen(!isOpen) }}>
          {isOpen ? "Ocultar" : "Mostrar"} Calidad Total...
        </Button>
      </div>
      {isOpen && (
        <>
          <div id="resultado de busqueda" className="row">
            <SearchCriteria />
            <SearchResults products={products} />
          </div>
        </>
      )}
    </CatalogContainer>
  );
}

Catalog.propTypes = {};
export default Catalog;