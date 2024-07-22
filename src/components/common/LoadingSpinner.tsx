import React from 'react';
import logoSrc from '../../assets/images/logo/ohmyfood.png';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-spinner">
      <img
        src={logoSrc}
        alt="Logo Ohmyfood!"
        className="loading-spinner__logo"
      />
      <i className="loading-spinner__icon fa-solid fa-utensils"></i>
    </div>
  );
};

export default LoadingSpinner;
