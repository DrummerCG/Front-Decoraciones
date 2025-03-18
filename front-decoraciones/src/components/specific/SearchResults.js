import React from 'react';
import ProductPreview from './products/ProductPreview';
import PropTypes from 'prop-types';

const SearchResults = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-12 col-lg-4 col-md-6 col-sm-6" key={product.name}>
          <ProductPreview product={product} />
        </div>
      ))}
    </div>
  );
}

SearchResults.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SearchResults;