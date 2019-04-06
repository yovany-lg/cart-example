import React from 'react';
import Cart from './Cart';

const Nav = ({ total }) => (
  <nav className="navbar is-light">
    <div className="container">
      <div className="navbar-brand">
        <div className="navbar-item">
          <h1 className="title">My Store</h1>
        </div>
        <div className="navbar-item">
          <a class="button is-light" rel="noopener noreferrer" href="https://github.com/yovany-lg/cart-example" target="_blank">
            <span class="icon is-small">
              <i class="fab fa-github fa-lg"></i>
            </span>
          </a>
        </div>
        <div className="navbar-item">
          <a class="button is-light" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC1oxnJjmWlaYR3meTzeaW4A" target="_blank">
            <span class="icon is-small">
              <i class="fab fa-youtube fa-lg"></i>
            </span>
          </a>
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