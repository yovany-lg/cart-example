import React from 'react';
import Product from './Product';

const ProductList = ({ products, available, addToCart, removeFromCart, deleteFromCart }) => (
  <div className="container">
    <div className="columns is-centered">
      <div className="column is-narrow">
        {products.map(
          prod => <Product
              product={prod}
              available={available[prod.id]}
              key={prod.id}
              addToCart={() => addToCart(prod.id)}
              removeFromCart={() => removeFromCart(prod.id)}
              deleteFromCart={() => deleteFromCart(prod.id)}
            />
        )}
      </div>
    </div>
  </div>
);

export default ProductList;