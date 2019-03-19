import React, {Component} from 'react';
class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card__picture">&nbsp;</div>
        <h4 className="card__heading">
          <span className="card__heading-span">Standard</span>
        </h4>
        <div className="card__price-box">
          <p className="card__price-value">5€/employé</p>
        </div>
        <div className="card__details">
          <ul>
            <li>
              <i className="fas fa-check card__icons card__icons--check" />{' '}
              Illimité
            </li>
            <li>
              <i className="fas fa-check card__icons card__icons--check" />{' '}
              Personnalisation
            </li>
            <li>
              <i className="fas fa-check card__icons card__icons--check" />{' '}
              Dashboard
            </li>
            <li>
              <i className="fas fa-times card__icons card__icons--cross" />{' '}
              Avantages inclus
            </li>
          </ul>
        </div>
        <div class="card__cta u-margin-bottom-small">
          <a
            href="#demo"
            class="btn btn--primary"
            onClick={this.handleClick.bind(this)}
          >
            Demander une demo
          </a>
        </div>
      </div>
    );
  }
}
export default Card;
