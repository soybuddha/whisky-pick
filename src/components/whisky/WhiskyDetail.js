import React from 'react';
import { bool, object } from 'prop-types';
import Loading from '../common/Loading';

const WhiskyDetailItem = ({ whisky }) => {
  return (
    <div>
      <img
        src={`/dist/src/assets/images/whiskies/${whisky.id}.jpg`}
        alt={`${whisky.brand} - ${whisky.name}`}
      />
      <h2>{whisky.brand}</h2>
      <h3>{whisky.name}</h3>
      <h4>
        {whisky.average_rating}
        <span>%</span>
      </h4>
      <p>{whisky.description}</p>
    </div>
  );
};

WhiskyDetailItem.propTypes = {
  whisky: object.isRequired,
};

const WhiskyDetail = ({ isLoading, whisky }) => {
  return (
    <div className="whisky-detail">
      {(isLoading)
        ? <Loading />
        : <WhiskyDetailItem whisky={whisky} />
      }
    </div>
  );
};

WhiskyDetail.propTypes = {
  isLoading: bool.isRequired,
  whisky: object.isRequired,
};

export default WhiskyDetail;
