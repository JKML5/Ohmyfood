import React from 'react';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import { useParams } from 'react-router-dom';
import restaurantsData from '../data/restaurants';
import DishCard from '../components/common/DishCard';

const Restaurant: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurantsData.find(
    (restaurant) => restaurant.id === parseInt(id || '', 10),
  );

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <>
      <Header />
      <main className="restaurant">
        <img
          src={restaurant.imgSrc}
          alt={`Photo ${restaurant.title}`}
          className="restaurant__img"
        />

        <section className="section section--grey">
          <div className="restaurant__heading">
            <h1 className="restaurant__heading__title">{restaurant.title}</h1>
            <i className="restaurant__heading__fav card__icon card__icon--like fa-solid fa-heart"></i>
          </div>

          {restaurant.menu && restaurant.menu.length > 0 && (
            <>
              <h2 className="restaurant__category__heading">Entrées</h2>
              <hr />
              <div className="cards">
                {restaurant.menu[0].Appetizer.map((dish) => (
                  <DishCard
                    key={dish.id}
                    title={dish.title}
                    subtitle={dish.subtitle}
                    price={dish.price}
                  />
                ))}
              </div>

              <h2 className="restaurant__category__heading">Plats</h2>
              <hr />
              <div className="cards">
                {restaurant.menu[0]['Main Courses'].map((dish) => (
                  <DishCard
                    key={dish.id}
                    title={dish.title}
                    subtitle={dish.subtitle}
                    price={dish.price}
                  />
                ))}
              </div>

              <h2 className="restaurant__category__heading">Desserts</h2>
              <hr />
              <div className="cards">
                {restaurant.menu[0].Desserts.map((dish) => (
                  <DishCard
                    key={dish.id}
                    title={dish.title}
                    subtitle={dish.subtitle}
                    price={dish.price}
                  />
                ))}
              </div>
            </>
          )}

          <div className="align-center">
            <button className="button">Commander</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Restaurant;
