import React from 'react';
import {compose, graphql} from 'react-apollo';
import {SIGNUP} from '../utils/graphql/User';

class Signup extends React.PureComponent {
  state = {
    email: '',
    password: '',
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {email, password} = this.state;
    console.log(email, password);

    this.props
      .signup({
        variables: {email, password},
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const {email, password} = this.state;
    return (
      <form action="#" className="form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div className="form__group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="*********"
            value={password}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <input type="submit" value="Se connecter" />
      </form>
    );
  }
}

export default compose(
  graphql(SIGNUP, {
    name: 'signup',
  }),
)(Signup);
