import React from 'react';
import image from '../assets/feed-me.jpg';

const MyCard = () => (
  <div class="card">
    <div class="card-image has-text-centered">
      <figure class="image is-4by3">
        <img src={image} alt="feed-me"/>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
       <div class="media-content">
          <strong>Programo por Comida </strong>😉 <a href="https://twitter.com/yovanylg" rel="noopener noreferrer" target="_blank" aria-label="retweet">@yovanylg</a>
        </div>
      </div>

      <div class="content">
        Ayudame a crear más cursos gratis de desarrollo web y aplicaciones móviles
      </div>
    </div>
    <footer class="card-footer">
      <a className="card-footer-item" href="https://www.paypal.me/yovanyluis/1" rel="noopener noreferrer" target="_blank" aria-label="reply">
        <span className="icon has-text-danger">
          <i className="fas fa-coffee" aria-hidden="true"></i>
        </span>
      </a>
      <a className="card-footer-item" href="https://www.paypal.me/yovanyluis/5" rel="noopener noreferrer" target="_blank" aria-label="retweet">
        <span className="icon has-text-primary">
          <i className="fas fa-hamburger"></i>
        </span>
      </a>
      <a className="card-footer-item" href="https://www.paypal.me/yovanyluis/10" rel="noopener noreferrer" target="_blank" aria-label="like">
        <span className="icon has-text-info">
          <i className="fas fa-beer"></i>
        </span>
      </a>
    </footer>
  </div>
);

class FeedMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    }
  }

  componentDidMount() {
    if (window.location.hostname !== "localhost") {
      setTimeout(() => {
        this.setState({ openModal: true });
      }, 15000);
    }
  }

  handleClose = () => {
    this.setState({ openModal: false });
  }

  render() {
    return (
      <div className={`modal ${this.state.openModal ? 'is-active' : ''}`}>
        <div className="modal-background"></div>
        <div className="modal-content" style={{ width: 350 }}>
          <MyCard />
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={this.handleClose}></button>
      </div>
    )
  }
}

export default FeedMe;