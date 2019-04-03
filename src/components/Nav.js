import React from 'react';
import Cart from './Cart';

const Nav = ({ total }) => (
  <nav className="navbar is-light">
    <div className="container">
      <div className="navbar-brand">
        <div className="navbar-item">
          <h1 className="title">My Store</h1>
        </div>
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>        
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <Cart total={total} />
          </div>
        </div>
      </div>
    </div>
  </nav> 
);

export default Nav;