import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <Logo />
        </div>

        <ul>
          <li className="footer__li">
            <a href="#">
              <i className="footer__icon fa-solid fa-utensils"></i> Proposer un
              restaurant
            </a>
          </li>
          <li className="footer__li">
            <a href="#">
              <i className="footer__icon fa-solid fa-handshake-angle"></i>
              Devenir partenaire
            </a>
          </li>
          <li className="footer__li">
            <a href="#">Mentions légales</a>
          </li>
          <li className="footer__li">
            <a href="mailto:contact@ohmyfood.com">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
