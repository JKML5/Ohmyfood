import React from 'react';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import HeroSection from '../components/sections/HeroSection';
import OperationSection from '../components/sections/OperationSection';
import RestaurantsSection from '../components/sections/RestaurantsSection';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Home: React.FC = () => {
  return (
    <>
      <Header isHome={true} />
      <main>
        <HeroSection />
        <OperationSection />
        <RestaurantsSection />
      </main>
      <Footer />
      <LoadingSpinner />
    </>
  );
};

export default Home;
