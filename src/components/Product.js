import React from 'react';

import { formatNumber } from '../utils'

const Product = ({ product, available, addToCart, removeFromCart, deleteFromCart }) => (
  <div style={{ marginBottom: '1.5rem' }}>
    <p><strong>{product.title}</strong> - ${formatNumber(product.price)}</p>
    <div className="field is-grouped">
      <p className="control">
        <span className="tag is-warning is-medium">{available}</span>
      </p>
      <p className="control">
        <a className="button is-dark" onClick={addToCart}>
          <span className="icon">
            <i className="fas fa-plus"></i>
          </span>
        </a>
      </p>
      <p className="control">
        <a className="button is-dark" onClick={removeFromCart}>
          <span className="icon">
            <i className="fas fa-minus"></i>
          </span>
        </a>
      </p>
      <p className="control">
        <a className="button is-danger is-outlined" onClick={deleteFromCart}>
          <span className="icon">
            <i className="fas fa-trash"></i>
          </span>
        </a>
      </p>
    </div>
  </div>
);

export default Product;