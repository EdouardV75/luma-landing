import React, {Component} from 'react';
import {ReactComponent as Illustration} from '../assets/svg/undraw_discount_d4bd.svg';

class Story extends Component {
  render() {
    return (
      <div className="story">
        <h2 className="heading-2 heading-2--blue u-margin-bottom-medium">
          Le meilleur des activités culturelles, sportives et des voyages
          d’exception.
        </h2>
        <hr className="u-margin-bottom-medium" />
        <h3 className="heading-3 heading-3--green u-margin-bottom-medium">
          Bénéficiez d'une remise entre 20 et 50% sur le prix public.
        </h3>
      </div>
    );
  }
}

export default Story;
