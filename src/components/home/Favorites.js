import React from 'react';
import { object } from 'prop-types';
import WhiskyListItem from '../whisky/WhiskyListItem';

const Favorites = React.memo(({ favorites }) => {
  return (
    <div className="featured favorite-list container-list">
      <h2>Our top-rated whiskys</h2>

      {Object.keys(favorites).map(key => (
        <div className="favorite-list-item" key={favorites[key].id}>
          <h3>{favorites[key].name}</h3>
          <WhiskyListItem whisky={favorites[key].whiskies[0]} />
        </div>
      ))}
    </div>
  );
});

Favorites.propTypes = {
  favorites: object.isRequired,
};

export default Favorites;
