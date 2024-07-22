import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

type HeaderProps = {
  isHome?: boolean;
};

const Header: React.FC<HeaderProps> = ({ isHome = false }) => {
  return (
    <header className="header">
      {!isHome && (
        <Link to="/" className="header__previous-link">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
      )}

      <div className="header__logo">
        <Logo />
      </div>

      {isHome && (
        <div className="header__localization">
          <i className="fa fa-location-dot"></i> Paris, Belleville
        </div>
      )}
    </header>
  );
};

export default Header;
