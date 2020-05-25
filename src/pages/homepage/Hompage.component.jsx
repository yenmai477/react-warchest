import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button, Space } from "antd";
import './css/Homepage.style.css'
import { Link, Switch, Route } from 'react-router-dom'

export class Hompage extends Component {
  render() {
    return (
      <div>
        <div className="navigation">
          <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>
          <div className="navigation__background">&nbsp;</div>
          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item"><Link to="/" className="navigation__link">Trang Chủ</Link></li>
              <li className="navigation__item"><Link to="/login" className="navigation__link">Đăng nhập</Link></li>
              <li className="navigation__item"><Link to="/register" className="navigation__link">Đăng Ký</Link></li>
            </ul>
          </nav>
        </div>
        <header className="header">
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Prixal</span>
              <span className="heading-primary--sub">is where life happens</span>
            </h1>
            <a to="#section-tours" className="btn btn--white btn--animated">Discover our service</a>
          </div>
        </header>
        <main>
          <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                Exciting service for anti-counterfeiting
        </h2>
            </div>
            <div className="row">
              <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with this</h3>
                <p className="paragraph">
                  Help you avoid virtual promotional traps, poor quality goods when buying things on Tiki, Sendo,
                  Shopee, Lazada, ...
                  You will be warned every time you see a virtual or shoddy promotional item
          </p>
                <h3 className="heading-tertiary u-margin-bottom-small">Protect your pocket effectively</h3>
                <p className="paragraph">
                  Never lose money unjustly because of virtual promotions, fake food
          </p>
                <a to="#" className="btn-text">Learn more →</a>
              </div>
              <div className="col-1-of-2">
                <div className="composition">


                  <div>
                    <img src="https://images.pexels.com/photos/4046266/pexels-photo-4046266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Photo 1" className="composition__photo composition__photo--p1" />
                    <img src="https://images.pexels.com/photos/4056512/pexels-photo-4056512.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Photo 2" className="composition__photo composition__photo--p2" />
                    <img src="https://images.pexels.com/photos/4008783/pexels-photo-4008783.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Photo 3" className="composition__photo composition__photo--p3" />
                  </div>

                </div>
              </div>
            </div>
          </section>
          <section className="section-features">
            <div className="row">
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-world" />
                  <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
            </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-compass" />
                  <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
            </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-map" />
                  <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
            </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-heart" />
                  <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
            </p>
                </div>
              </div>
            </div>
          </section>
          <section className="section-stories">
            <div className="bg-video">
              <video className="bg-video__content" autoPlay muted loop>
                <source src="img/video.mp4" type="video/mp4" />
                <source src="img/video.webm" type="video/webm" />
          Your browser is not supported!
        </video>
            </div>
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                We make people genuinely happy
        </h2>
            </div>
            <div className="row">
              <div className="story">
                <figure className="story__shape">
                  <img src="https://images.pexels.com/photos/3991988/pexels-photo-3991988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Person on a tour" className="story__img" />
                  <figcaption className="story__caption">Mary Smith</figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">I had the most qualitiest items with this app
            </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente
                    aspernatur
                    libero repellat quis consequatur
                    ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur
                    libero
                    repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
            </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="story">
                <figure className="story__shape">
                  <img src="https://images.pexels.com/photos/3981786/pexels-photo-3981786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Person on a tour" className="story__img" />
                  <figcaption className="story__caption">Jack Wilson</figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">WOW! My life is completely different now
            </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente
                    aspernatur
                    libero repellat quis consequatur
                    ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur
                    libero
                    repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
            </p>
                </div>
              </div>
            </div>
            <div className="u-center-text u-margin-top-huge">
              <a to="#" className="btn-text">Read all stories →</a>
            </div>
          </section>
          <section className="section-book" >
            <div style={{ padding: '0px 10rem' }}>
              <div className="book">
                <div className="book__form">
                  <form action="#" className="form">
                    <div className="u-margin-bottom-medium">
                      <h2 className="heading-secondary">
                        Contact us
                </h2>
                    </div>
                    <div className="form__group">
                      <input type="text" className="form__input" placeholder="Full name" id="name" required />
                      <label htmlFor="name" className="form__label">Full name</label>
                    </div>
                    <div className="form__group">
                      <input type="email" className="form__input" placeholder="Email address" id="email" required />
                      <label htmlFor="email" className="form__label">Email address</label>
                    </div>
                    <div className="form__group">
                      <button className="btn btn--green">Next step →</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="row">
            <div className="col-1-of-2">
              <div className="footer__navigation">
                <ul className="footer__list">
                  <li className="footer__item"><a to="#" className="footer__link">Company</a></li>
                  <li className="footer__item"><a to="#" className="footer__link">Contact us</a></li>
                  <li className="footer__item"><a to="#" className="footer__link">Carrers</a></li>
                  <li className="footer__item"><a to="#" className="footer__link">Privacy policy</a></li>
                  <li className="footer__item"><a to="#" className="footer__link">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  value: state.count.value,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT_START" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hompage);
