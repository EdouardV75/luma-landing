import React, {Component} from 'react';
import Story from '../components/Story';
import ScrollableAnchor from 'react-scrollable-anchor';
import image1 from '../assets/img/screen.png';
import Fade from 'react-reveal/Fade';

class Partners extends Component {
  render() {
    return (
      <ScrollableAnchor id={'partners'}>
        <section className="section-partners">
          {/* <h1 className="heading-1 heading-1--blue u-center-text">
            Nos avantages
          </h1> */}
          <div className="partners">
            <div className="partners__box">
              <Story />
            </div>
            <div className="partners__box">
              <Fade right duration={2000}>
                <img src={image1} alt="test 1" className="partners__img" />
              </Fade>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

export default Partners;
