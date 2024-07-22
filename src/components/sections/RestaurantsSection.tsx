import React from 'react';
import restaurantsData from '../../data/restaurants';
import RestaurantCard from '../common/RestaurantCard';

const RestaurantsSection: React.FC = () => {
  return (
    <section className="section section__restaurant section--grey">
      <h1 className="section__title">Restaurants</h1>

      <div className="cards">
        {restaurantsData.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            title={restaurant.title}
            location={restaurant.location}
            imgSrc={restaurant.imgSrc}
            isNew={restaurant.isNew}
          />
        ))}
      </div>
    </section>
  );
};

export default RestaurantsSection;
