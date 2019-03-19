import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import {ReactComponent as Illustration1} from '../assets/svg/undraw_booking_33fn.svg';
import {ReactComponent as Illustration2} from '../assets/svg/undraw_team_work_k80m.svg';
import {ReactComponent as Illustration3} from '../assets/svg/undraw_pie_chart_6efe.svg';

class About extends Component {
  render() {
    return (
      <ScrollableAnchor id={'about'}>
        <section className="section-about">
          {/* <h1 className="heading-1 heading-1--blue u-margin-top-medium u-center-text">
            Notre produit
          </h1> */}
          <div className="feature">
            <div className="feature__box">
              <Illustration1 className="feature__logo" alt="feature logo" />
              <div className="feature__textbox">
                <h3 className="heading-3 heading-3--green u-margin-bottom-small">
                  Un monde d’avantages
                </h3>
                <p className="feature__text">
                  Notre <b>algorithme</b> sélectionne les offres qui vous
                  correspondent le mieux.
                </p>
              </div>
            </div>
            <div className="feature__box">
              <Illustration2 className="feature__logo" alt="feature logo" />
              <div className="feature__textbox">
                <h3 className="heading-3 heading-3--green u-margin-bottom-small">
                  Des avantages inédits
                </h3>
                <p className="feature__text">
                  Chaque mois, de nouvelles <b>offres exclusives</b> négociées
                  avec nos partenaires.
                </p>
              </div>
            </div>
            <div className="feature__box">
              <Illustration3 className="feature__logo" alt="feature logo" />
              <div className="feature__textbox">
                <h3 className="heading-3 heading-3--green u-margin-bottom-small">
                  Une gestion clé en main
                </h3>
                <p className="feature__text">
                  Accédez à votre <b>dashboard</b> et gérez la liste de vos
                  collaborateurs bénéficiaires en un clic.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

export default About;
