import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <p>
        <strong>Programo por comida :) </strong>
        <a className="button" href="https://www.paypal.me/yovanyluis/1" target="_blank">
          <span className="icon has-text-grey">
            <i className="fas fa-coffee"></i>
          </span>
        </a>
        <a className="button" href="https://www.paypal.me/yovanyluis/5" target="_blank">
          <span className="icon has-text-success">
            <i className="fas fa-hamburger"></i>
          </span>
        </a>
        <a className="button" href="https://www.paypal.me/yovanyluis/10" target="_blank">
          <span className="icon has-text-info">
            <i className="fas fa-beer"></i>
          </span>
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
