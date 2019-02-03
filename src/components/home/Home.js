import React from 'react';
import { bool, object } from 'prop-types';
import ScrollToTop from '../common/ScrollToTop';
import Loading from '../common/Loading';
import Hero from './Hero';
import Favorites from './Favorites';

const Home = ({ isLoading, favorites }) => {
  return (
    <ScrollToTop>
      <div className="home">
        <Hero />
        {(isLoading)
          ? <Loading />
          : <Favorites favorites={favorites} />
        }
      </div>
    </ScrollToTop>
  );
};

Home.propTypes = {
  favorites: object.isRequired,
  isLoading: bool.isRequired,
};

export default Home;
