import React, {Component} from 'react';
import Mission from './Mission';
import About from './About';
import Partners from './Partners';
import Pricing from './Pricing';

class Main extends Component {
  render() {
    return (
      <main className="main">
        <Mission />
        <About />
        <Partners />
        <Pricing />
      </main>
    );
  }
}

export default Main;
