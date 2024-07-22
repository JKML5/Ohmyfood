import React from 'react';
import { Link } from 'react-router-dom';

const OperationSection: React.FC = () => {
  return (
    <section className="section section__operation">
      <h1 className="section__title">Fonctionnement</h1>

      <div className="cards">
        <Link className="card card--grey" to="#">
          <div className="card__rank">1</div>
          <i className="card__icon fa-solid fa-mobile-screen-button"></i>
          Choisissez un restaurant
        </Link>

        <Link className="card card--grey" to="#">
          <div className="card__rank">2</div>
          <i className="card__icon fa-solid fa-list-ul"></i>
          Composez votre menu
        </Link>

        <Link className="card card--grey card--selected" to="#">
          <div className="card__rank">3</div>
          <i className="card__icon fa-solid fa-store"></i>
          Dégustez un restaurant
        </Link>
      </div>
    </section>
  );
};

export default OperationSection;
