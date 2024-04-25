import React, { useEffect, useState } from "react";
import axios from "axios";

const Catalog = () => {
    const [productos, setProductos] = useState([]);

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


    return(
        <>
            <p>catalogo</p>
            {productos.map(producto => <p>{producto.nombre}</p>)}
        </>
        
    )
}

Catalog.protoTypes = {};

export default Catalog;