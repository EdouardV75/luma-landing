import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul className="nav">
          <h4 className="heading-4 heading-4--green">A propos de Luma</h4>
          <li className="nav__item--1">
            <a href="#mission" className="nav__link">
              Concept
            </a>
          </li>
          {/* <li className="nav__item--2">
            <a href="#" className="nav__link">
              Qui sommes-nous?
            </a>
          </li> */}
          <li className="nav__item--3">
            <a href="mailto:contact@luma-app.com" className="nav__link">
              Contactez-nous
            </a>
          </li>
          {/* <li className="nav__item--4">
            <a href="#" className="nav__link">
              Recrutement
            </a>
          </li> */}
        </ul>
        <ul className="nav">
          <h4 className="heading-4 heading-4--green">Nous rejoindre</h4>
          <li className="nav__item--5">
            <a href="#" className="nav__link">
              Devenez partenaire
            </a>
          </li>
          {/* <li className="nav__item--6">
            <a href="#" className="nav__link">
              Nos partenaires
            </a>
          </li> */}
          {/* <li className="nav__item--7">
            <a href="#" className="nav__link">
              Nos clients
            </a>
          </li> */}
          <li className="nav__item--8">
            <a href="#pricing" className="nav__link">
              Notre Pricing
            </a>
          </li>
        </ul>
        <ul className="nav">
          <h4 className="heading-4 heading-4--green">Legal</h4>
          {/* <li className="nav__item--13">
            <a href="#" className="nav__link">
              Centre d'aide
            </a>
          </li>
          <li className="nav__item--14">
            <a href="#" className="nav__link">
              Confidentialité
            </a>
          </li> */}
          <li className="nav__item--15">
            <a href="#" className="nav__link">
              CGUs
            </a>
          </li>
          <li className="nav__item--16">
            <a href="#" className="nav__link">
              Mentions légales
            </a>
          </li>
        </ul>
        <ul className="nav">
          <h4 className="heading-4 heading-4--green">Réseaux sociaux</h4>
          {/* <li className="nav__item--13">
            <a href="#" className="nav__link">
              Centre d'aide
            </a>
          </li>
          <li className="nav__item--14">
            <a href="#" className="nav__link">
              Confidentialité
            </a>
          </li> */}
          <li className="nav__item--15">
            <a href="#" className="nav__link">
              Linkedin
            </a>
          </li>
          <li className="nav__item--16">
            <a href="#" className="nav__link">
              Twitter
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}
export default Footer;
