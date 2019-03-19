import React, {Component} from 'react';
import Header from '../components/Header';
import Main from './Main';
import Footer from '../components/Footer';

class LandingPage extends Component {
  render() {
    return (
      <div className="landing">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
