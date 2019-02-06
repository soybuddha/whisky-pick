import React from 'react';
import { object } from 'prop-types';

const AgePriceComparison = React.memo(({ favorites }) => {
  return (
    <div className="featured age-price-comparison">
      <h2>Average price vs. age</h2>

      {Object.keys(favorites).map(key => (
        <div className="age-price-comparison-item" key={favorites[key].id}>
          <h3>{favorites[key].name}</h3>
          <div className="age-price-comparison-detail">
            <div className="price-comparison-detail-card">
              <h4>
                $
                {favorites[key].average_price}
              </h4>
              <p>Average Price</p>
            </div>
            <div className="age-comparison-detail-card">
              <h4>
                {favorites[key].average_age}
                &nbsp;yrs.
              </h4>
              <p>Average Age</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

AgePriceComparison.propTypes = {
  favorites: object.isRequired,
};

export default AgePriceComparison;
