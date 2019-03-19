import React, {Component} from 'react';
import image1 from '../assets/img/travel.jpg';
import image2 from '../assets/img/art.jpg';
import image3 from '../assets/img/adventure.jpg';
import image4 from '../assets/img/escalade.jpg';
import image5 from '../assets/img/running.jpg';

class Composition extends Component {
  render() {
    return (
      <div className="composition">
        <img
          src={image1}
          alt="test 1"
          className="composition__photo composition__photo--p1"
        />
        <img
          src={image2}
          alt="test 1"
          className="composition__photo composition__photo--p2"
        />
        <img
          src={image3}
          alt="test 1"
          className="composition__photo composition__photo--p3"
        />
        <img
          src={image4}
          alt="test 1"
          className="composition__photo composition__photo--p4"
        />
        <img
          src={image5}
          alt="test 1"
          className="composition__photo composition__photo--p5"
        />
        <img
          src={image5}
          alt="test 1"
          className="composition__photo composition__photo--p6"
        />
        <img
          src={image5}
          alt="test 1"
          className="composition__photo composition__photo--p7"
        />
        <img
          src={image5}
          alt="test 1"
          className="composition__photo composition__photo--p8"
        />
      </div>
    );
  }
}

export default Composition;
