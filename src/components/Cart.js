import React from 'react';
import { formatNumber } from '../utils';

const Cart = ({ total = 0 }) => (
  <div className="field is-grouped">
    <p className="control">
      <a className="button is-primary">
        <span className="icon">
          <i className="fas fa-shopping-cart"></i>
        </span>
        <span className="tag is-dark">
          ${formatNumber(total)}
        </span>
      </a>
    </p>
  </div>
);

export default Cart;