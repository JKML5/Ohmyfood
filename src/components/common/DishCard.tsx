import React from 'react';

type DishCardProps = {
  title: string;
  subtitle: string;
  price: number;
};

const DishCard: React.FC<DishCardProps> = ({ title, subtitle, price }) => {
  return (
    <div className="card">
      <div className="card__content">
        <div>
          <h3 className="card__heading">{title}</h3>
          <p className="card__subheading">{subtitle}</p>
        </div>
        <span className="card__price">{price}€</span>
      </div>
      <div className="card__check">
        <i className="card__check__icon fa-solid fa-check-circle"></i>
      </div>
    </div>
  );
};

export default DishCard;
