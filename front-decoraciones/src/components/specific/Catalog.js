import React, { useState } from "react";
import ProductPreview from "./products/productPreview";

const SearchResults = ({products}) => {
    return (products.map((product) => (
        <div className="col-12 col-lg-4 col-md-6 col-sm-6">
            <ProductPreview product={product} key={product._id}/>
        </div>
    )));
}
const Catalog = () => {
    const [isOpen, changeIsOpen] = useState(true);
    const products = [
        {
            _id:"7ttfyyffyfy",
            name: "cortina Corrediza",
            description: "producto fabricado con finos cabellos de la peluca de la nina del aro",
            image: "https://th.bing.com/th/id/OIP.MCXu9YhM-RnPaWbU6mOdOQHaE8?rs=1&pid=ImgDetMain"
        },
        {
            _id:"huggfhdgdf",
            name: "cortina con motor",
            description: "producto fabricado con finos cabellos de la peluca de la nina del aro",
            image: "https://th.bing.com/th/id/OIP.MCXu9YhM-RnPaWbU6mOdOQHaE8?rs=1&pid=ImgDetMain"
        }
    ];
    return (
        <div className="container">
            <div id='formulario de busqueda' className="row">
                <p>catalogo</p>
                <label>{"AHHHHHHHH" + isOpen}</label>
                <button onClick={() => { changeIsOpen(!isOpen) }}>Cambiar isopem</button>
            </div>
            <div id="resultado de busqueda" className="row">
                <SearchResults products={products}/>
            </div>
        </div>

    );
}

Catalog.protoTypes = {};

export default Catalog;