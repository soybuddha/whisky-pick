import React from 'react';
import { object } from 'prop-types';

const RatingComparison = React.memo(({ favorites }) => {
  return (
    <div className="featured rating-comparison">
      <h2>Average ratings by whisky type</h2>

      {Object.keys(favorites).map(key => (
        <div className="rating-comparison-item" key={favorites[key].id}>
          <h3>{favorites[key].name}</h3>
          <div className="comparison-bar">
            <div className="comparison-outer" style={{ width: '100%' }}>
              <div className="comparison-inner" style={{ width: `${favorites[key].average_rating}%` }} />
              <p style={{ left: `${favorites[key].average_rating}%` }}>
                {favorites[key].average_rating}
                %
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

RatingComparison.propTypes = {
  favorites: object.isRequired,
};

export default RatingComparison;
