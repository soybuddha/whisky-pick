import React from 'react';
import { bool, object } from 'prop-types';
import Loading from '../common/Loading';
import WhiskyListItem from '../whisky/WhiskyListItem';

const Favorites = React.memo(({ favorites }) => {
  return (
    <div className="favorite-list">
      <h2>Favorites</h2>

      {Object.keys(favorites).map(key => (
        <div className="favorite-list-item" key={favorites[key].id}>
          <h3>{favorites[key].type}</h3>
          <WhiskyListItem whisky={favorites[key]} />
        </div>
      ))}
    </div>
  );
});

Favorites.propTypes = {
  favorites: object.isRequired,
};

const Home = ({ isLoading, favorites }) => {
  return (
    <div className="home">
      {(isLoading)
        ? <Loading />
        : <Favorites favorites={favorites} />
      }
    </div>
  );
};

Home.propTypes = {
  favorites: object.isRequired,
  isLoading: bool.isRequired,
};

export default Home;
