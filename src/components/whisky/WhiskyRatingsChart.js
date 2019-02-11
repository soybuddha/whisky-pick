import React from 'react';
import {
  arrayOf,
  number,
  shape,
  string,
} from 'prop-types';

const WhiskyRatingsChart = React.memo(({ ratings }) => {
  const percentages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  return (
    <div className="ratings">
      <div className="ratings-x-axis" />
      <div className="ratings-y-axis">
        {
          percentages.reverse().map(pct => {
            return (
              <div
                className="pct"
                key={pct}
                style={{
                  height: `${100 / percentages.length}%`,
                }}
              >
                <div className="pct-label">
                  {pct}
                  %
                </div>
                <div className="pct-line" />
              </div>
            );
          })
        }
      </div>

      <div className="ratings-chart">
        {
          ratings.map(rating => {
            return (
              <div
                className="rating"
                key={rating.name}
                style={{
                  width: `${100 / ratings.length}%`,
                }}
              >
                <div className="rating-score">
                  <div className="rating-score-line" />
                  <div
                    className="rating-score-point-container"
                    style={{
                      height: `${rating.score}%`,
                    }}
                  >
                    <div className="rating-score-point" />
                  </div>
                </div>
                <div className="rating-name">{rating.name}</div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
});

WhiskyRatingsChart.propTypes = {
  ratings: arrayOf(shape({
    name: string.isRequired,
    score: number.isRequired,
  })).isRequired,
};

export default WhiskyRatingsChart;
