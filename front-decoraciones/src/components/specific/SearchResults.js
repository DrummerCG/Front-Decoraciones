import '../../styles/specific/buttons.css';
import { FaCartPlus } from 'react-icons/fa';

const SearchResults = ({ products }) => {
  return (
    <div className="row">
      {products.map((product, index) => (
        <div className="col-12 col-lg-4 col-md-6 col-sm-6 container-product" key={index}>
          <img src={product.image} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <div className="botones">
            <button className="boton-de-compra">Comprar</button>
            <p />
            <button className="m-car">
              <FaCartPlus /> 
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
