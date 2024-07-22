import React from 'react';

const OperationSection: React.FC = () => {
  return (
    <section className="section section__operation">
      <h1 className="section__title">Fonctionnement</h1>

      <div className="cards">
        <a className="card card--grey" href="#">
          <div className="card__rank">1</div>
          <i className="card__icon fa-solid fa-mobile-screen-button"></i>
          Choisissez un restaurant
        </a>

        <a className="card card--grey" href="#">
          <div className="card__rank">2</div>
          <i className="card__icon fa-solid fa-list-ul"></i>
          Composez votre menu
        </a>

        <a className="card card--grey card--selected" href="#">
          <div className="card__rank">3</div>
          <i className="card__icon fa-solid fa-store"></i>
          Dégustez un restaurant
        </a>
      </div>
    </section>
  );
};

export default OperationSection;
