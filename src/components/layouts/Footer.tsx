import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <Logo />
        </div>

        <ul>
          <li className="footer__li">
            <Link to="#">
              <i className="footer__icon fa-solid fa-utensils"></i> Proposer un
              restaurant
            </Link>
          </li>
          <li className="footer__li">
            <Link to="#">
              <i className="footer__icon fa-solid fa-handshake-angle"></i>
              Devenir partenaire
            </Link>
          </li>
          <li className="footer__li">
            <Link to="#">Mentions légales</Link>
          </li>
          <li className="footer__li">
            <Link to="mailto:contact@ohmyfood.com">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
