import React from 'react';
import image from '../assets/feed-me.jpg';

class FeedMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    }
  }

  componentDidMount() {
    if (window.location && window.location.hostname !== "localhost") {
      setTimeout(() => {
        this.setState({ openModal: true });
      }, 10000);
    }
  }

  handleClose = () => {
    this.setState({ openModal: false });
  }

  render() {
    return (
      <div className={`modal ${this.state.openModal ? 'is-active' : ''}`}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img src={image} alt="feed-me" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Programo por Comida </strong>😉 <a href="https://twitter.com/yovanylg" target="_blank" aria-label="retweet">@yovanylg</a>
                    <br />
                    Ayudame a crear más cursos de desarrollo web y aplicaciones móviles
                  </p>
                </div>
                <nav className="level is-mobile">
                  <div className="level-left">
                    <a className="level-item" href="https://www.paypal.me/yovanyluis/1" target="_blank" aria-label="reply">
                      <span className="icon has-text-grey">
                        <i className="fas fa-coffee" aria-hidden="true"></i>
                      </span>
                    </a>
                    <a className="level-item" href="https://www.paypal.me/yovanyluis/5" target="_blank" aria-label="retweet">
                      <span className="icon has-text-danger">
                        <i className="fas fa-hamburger"></i>
                      </span>
                    </a>
                    <a className="level-item" href="https://www.paypal.me/yovanyluis/10" target="_blank" aria-label="like">
                      <span className="icon has-text-info">
                        <i className="fas fa-beer"></i>
                      </span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>
          </div>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={this.handleClose}></button>
      </div>
    )
  }
}

export default FeedMe;