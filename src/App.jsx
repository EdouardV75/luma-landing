import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './layouts/LandingPage';
import Calendly from './components/Calendly';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/calendly" component={Calendly} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
