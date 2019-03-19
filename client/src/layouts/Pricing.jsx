import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
import * as typeformEmbed from '@typeform/embed';

class Pricing extends Component {
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
    // document.getElementById('btn-popup3').addEventListener('click', function() {
    //   popup.open();
    // });
    // document.getElementById('btn-popup4').addEventListener('click', function() {
    //   popup.open();
    // });
    // document.getElementById('btn-popup5').addEventListener('click', function() {
    //   popup.open();
    // });
  }

  render() {
    return (
      <ScrollableAnchor id={'pricing'}>
        <section className="section-pricing">
          <div className="pricing">
            <div className="card">
              <div className="card__picture card__picture--picture1">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span">Essai gratuit</span>
              </h4>
              <div className="card__price-box">
                <p className="card__price-value">
                  <b>30 jours</b>
                </p>
              </div>
              <div className="card__details">
                <ul>
                  <li>
                    <i className="fas fa-check card__icons card__icons--check" />{' '}
                    Personnalisation des avantages
                  </li>
                  <li>
                    <i className="fas fa-check card__icons card__icons--check" />{' '}
                    Accès à un dashboard
                  </li>
                  <li>
                    <i className="fas fa-check card__icons card__icons--check" />{' '}
                    Nombre d'utilisateurs illimités
                  </li>
                  <li>&nbsp;</li>
                </ul>
              </div>
              <div className="card__cta u-margin-bottom-medium">
                <a href="#demo" class="btn btn--blue" id="btn-popup3">
                  Demander une demo
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card__picture card__picture--picture2">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span">Standard</span>
              </h4>
              <div className="card__price-box">
                <p className="card__price-value">
                  <b>5€/mois/employé</b>
                </p>
              </div>
              <div className="card__details">
                <ul>
                  <li>
                    <i className="fas fa-check card__icons card__icons--check" />{' '}
                    Personnalisation des avantages
                  </li>
                  <li>
                    <i className="fas fa-check card__icons card__icons--check" />{' '}
                    Accès à un dashboard
                  </li>
                  <li>
                    <i className="fas fa-check card__icons card__icons--check" />{' '}
                    Nombre d'utilisateurs illimités
                  </li>
                  <li>&nbsp;</li>
                </ul>
              </div>
              <div className="card__cta u-margin-bottom-medium">
                <a href="#demo" className="btn btn--blue" id="btn-popup4">
                  Demander une demo
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card__picture card__picture--picture3">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span">Premium</span>
              </h4>
              <div className="card__price-box">
                <p className="card__price-value">
                  <b>Nous contacter</b>
                </p>
              </div>
              <div className="card__details">
                <ul>
                  <li>
                    <i className="fas fa-check card__icons card__icons--check" />{' '}
                    Personnalisation des avantages
                  </li>
                  <li>
                    <i className="fas fa-check card__icons card__icons--check" />{' '}
                    Accès à un dashboard
                  </li>
                  <li>
                    <i className="fas fa-check card__icons card__icons--check" />{' '}
                    Nombre d'utilisateurs illimités
                  </li>
                  <li>
                    <i className="fas fa-check card__icons card__icons--check" />{' '}
                    Activités team building
                  </li>
                </ul>
              </div>
              <div className="card__cta u-margin-bottom-small">
                <a href="#demo" className="btn btn--blue" id="btn-popup5">
                  Demander une demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}
export default withRouter(Pricing);
