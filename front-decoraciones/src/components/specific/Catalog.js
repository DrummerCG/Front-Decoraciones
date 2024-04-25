import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductPreview from "./products/productPreview";

const SearchResults = ({products}) => {
    return (products.map((product) => (
        <div className="col-12 col-lg-4 col-md-6 col-sm-6">
            <ProductPreview product={product} key={product._id}/>
        </div>
    )));
}
const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [isOpen, changeIsOpen] = useState(true);

    useEffect(() => {
        // Realiza la solicitud al montar el componente
        axios.get("http://localhost:3001/productos")
          .then(response => {
            setProductos(response.data); // Actualiza el estado con los datos obtenidos
          })
          .catch(error => {
            console.error("Error al obtener los productos:", error);
          });
      }, []); // El segundo argumento vacío asegura que se ejecute solo una vez al montar el componente
    
    return (
        <div className="container">
            <div id='formulario de busqueda' className="row">
                <p>catalogo</p>
                <label>{"AHHHHHHHH" + isOpen}</label>
                <button onClick={() => { changeIsOpen(!isOpen) }}>Cambiar isopen</button>
            </div>
            <div id="resultado de busqueda" className="row">
                <SearchResults products={products}/>
            </div>
        </div>

    );
}

Catalog.protoTypes = {};

export default Catalog;