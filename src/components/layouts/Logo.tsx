import React from 'react';
import logoSvg from '../../assets/images/logo/ohmyfood.svg';
import logoPng from '../../assets/images/logo/ohmyfood.png';

const Logo: React.FC = () => {
  return (
    <picture>
      <source srcSet={logoSvg} type="image/svg+xml" />
      <img srcSet={logoPng} alt="Logo Ohmyfood!" />
    </picture>
  );
};

export default Logo;
