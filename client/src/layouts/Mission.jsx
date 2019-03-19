import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import {ReactComponent as Illustration1} from '../assets/svg/undraw_gift_card_6ekc.svg';
import Fade from 'react-reveal/Fade';

class Mission extends Component {
  render() {
    return (
      <ScrollableAnchor id={'mission'}>
        <section className="section-mission">
          <div className="mission">
            <div className="mission__box">
              <Fade left duration={2000}>
                <Illustration1 className="mission__img" alt="mission logo" />
              </Fade>
            </div>
            <div className="mission__box">
              <h2 className="heading-2 heading-2--blue u-margin-bottom-medium">
                Notre mission est de mettre le bien-être des employés au coeur
                de la culture d’entreprise.
              </h2>
              <hr className="u-margin-bottom-medium" />
              <h3 className="heading-3 heading-3--green">
                Offrez à vos collaborateurs un monde d’avantages personnalisés.
              </h3>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

export default Mission;
