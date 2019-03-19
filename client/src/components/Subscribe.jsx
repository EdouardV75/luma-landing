import React, {Component} from 'react';
import {compose, graphql} from 'react-apollo';
import {Router} from '../server/routes.js';
import {SIGNIN} from '../utils/graphql/user';
import {isEmail, isPassword} from '../utils/validation';

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      error: '',
    });

    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {email, password} = this.state;
    console.log(email, password);
  }

  render() {
    return (
      <div className="popup" id="subscribe">
        <div className="popup__content">
          <form action="#" className="form" onSubmit={this.handleSubmit}>
            <div className="form__header u-margin-bottom-small">
              <h3 className="heading-3 u-margin-bottom-xsmall">Se connecter</h3>
              <span className="form__text">Connexion classique 😎</span>
            </div>
            <a href="#container" className="popup__close">
              &times;
            </a>
            <div className="form__group">
              <label className="form__label u-margin-bottom-xsmall">
                Email
              </label>
              <input
                className="form__input"
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email.value}
                onChange={this.handleChange}
              />
            </div>
            <div className="form__group">
              <div className="form__control">
                <label className="form__label u-margin-bottom-xsmall">
                  Password
                </label>
                <label
                  className="form__label form__label--black u-margin-bottom-xsmall"
                  onClick={this.handleForgot}
                >
                  Forgot password?
                </label>
              </div>
              <input
                className="form__input"
                type="password"
                name="password"
                placeholder="*********"
                value={this.state.password.value}
                onChange={this.handleChange}
              />
              <div className="form__errors">{this.state.error}</div>
            </div>
            <input
              className="btn-submit u-margin-bottom-small"
              type="submit"
              value="Se connecter"
            />
            <div className="form__seenon-text u-margin-bottom-small">OU</div>

            <div className="btn-social">
              <button
                className="btn-social__btn"
                onClick={() => this.handleOauth('google')}
              >
                <img
                  className="btn-social__icon"
                  src="/static/svg/google.svg"
                  alt="bell svg"
                />
                Google
              </button>
              <button
                className="btn-social__btn"
                onClick={() => this.handleOauth('twitter')}
              >
                <img
                  className="btn-social__icon"
                  src="/static/svg/twitter.svg"
                  alt="bell svg"
                />
                Twitter
              </button>
              <button
                className="btn-social__btn"
                onClick={() => this.handleOauth('facebook')}
              >
                <img
                  className="btn-social__icon"
                  src="/static/svg/facebook.svg"
                  alt="bell svg"
                />
                Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Subscribe;
