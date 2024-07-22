import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="section section--reservez section--grey align-center">
      <h1 className="section__title">Réservez le menu qui vous convient</h1>
      <p className="mb20">
        Découvrez des restaurants d&apos;exception, sélectionnés par nos soins.
      </p>

      <button className="button">Explorer nos restaurants</button>
    </section>
  );
};

export default HeroSection;
