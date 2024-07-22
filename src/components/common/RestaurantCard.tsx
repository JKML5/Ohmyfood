import React from 'react';
import { Link } from 'react-router-dom';

type RestaurantCardProps = {
  id: number;
  title: string;
  location: string;
  imgSrc: string;
  isNew: boolean;
};

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id,
  title,
  location,
  imgSrc,
  isNew,
}) => {
  return (
    <div className="card card--relative">
      {isNew && <span className="badge badge--new"> Nouveau </span>}

      <a href={'/restaurant/' + id} className="url-block">
        <img src={imgSrc} alt={'Photo ' + title} className="card__thumbnail" />
      </a>

      <div className="card__container">
        <div className="card__heading">
          <h2 className="card__container__title">
            <Link to={'/restaurant/' + id}>{title}</Link>
          </h2>
          <p className="card__container__subtitle">
            <a href={'/restaurant/' + id}>{location}</a>
          </p>
        </div>
        <i className="card__icon card__icon--like fa-solid fa-heart"></i>
      </div>
    </div>
  );
};

export default RestaurantCard;
