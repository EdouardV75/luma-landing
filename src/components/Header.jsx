import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
// import {ReactComponent as Logo} from '../assets/svg/logo.svg';
import logo from '../assets/img/Logo_white.png';
import {ReactComponent as Illustration} from '../assets/svg/undraw_celebration_0jvk.svg';
import * as typeformEmbed from '@typeform/embed';

class Header extends Component {
  componentDidMount() {
    const popup = typeformEmbed.makePopup(
      'https://edouardvaudour.typeform.com/to/OEi4eJ',
      {
        mode: 'popup',
        autoClose: 3000,
        hideHeaders: true,
        hideFooters: true,
      },
    );
    // document.getElementById('btn-popup1').addEventListener('click', function() {
    //   popup.open();
    // });
    document.getElementById('btn-popup2').addEventListener('click', function() {
      popup.open();
    });
  }

  render() {
    return (
      <header className="header">
        {/* <Logo className="header__nav-item header__logo" alt="luma logo" /> */}
        <div className="header__nav">
          <div className="header__nav-box">
            <img
              src={logo}
              alt="luma logo"
              className="header__logo header__nav-item"
            />
            <a href="#mission" className="header__nav-item">
              Notre mission
            </a>
            <a href="#about" className="header__nav-item">
              Notre produit
            </a>
            <a href="#partners" className="header__nav-item">
              Nos avantages
            </a>
            <a href="#pricing" className="header__nav-item">
              Notre pricing
            </a>
          </div>
          <div className="header__cta">
            <a
              href="#demo"
              className="header__nav-item header__nav-item--green header__nav-item--visible"
            >
              Se connecter
            </a>
            <a
              href="#demo"
              className="btn btn--green header__nav-item"
              id="btn-popup1"
            >
              Demander une demo
            </a>
          </div>
        </div>

        <div className="header__body-box">
          <div className="header__heading">
            <h1 className="heading-1 heading-1--white u-margin-bottom-medium">
              Luma, la plateforme des avantages des employés.
            </h1>
            <a
              href="#demo"
              className="btn btn--green btn--animated"
              id="btn-popup2"
            >
              Demander une demo
            </a>
            <a
              href="#demo"
              className="header__nav-item header__nav-item--green header__nav-item--invisible"
            >
              Se connecter
            </a>
          </div>
          <div className="header__illustration">
            <Illustration className="header__img" alt="luma illustration" />
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
