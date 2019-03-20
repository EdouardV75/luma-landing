import React, {Component} from 'react';
import {ReactComponent as Illustration} from '../assets/svg/undraw_around_the_world_v9nu.svg';

class Feature extends Component {
  render() {
    return (
      <div className="feature__box">
        <Illustration className="feature__logo" alt="feature logo" />
        <h2 className="heading-2 u-margin-bottom-small">Explore the world</h2>
        <p className="feature__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          nobis similique facilis ullam quia
        </p>
      </div>
    );
  }
}

export default Feature;
