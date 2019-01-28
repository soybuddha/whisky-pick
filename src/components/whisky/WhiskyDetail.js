import React from 'react';
import {
  bool,
  object,
  number,
  shape,
  string,
} from 'prop-types';
import Loading from '../common/Loading';
import BackButton from '../common/BackButton';

const WhiskyDetailItem = ({ whisky }) => {
  const imageSrc = require(`../../assets/images/whiskies/${whisky.id}.jpg`);
  // const imageSrc = `/dist/src/assets/images/whiskies/${whisky.id}.jpg`;

  return (
    <div>
      <img
        src={imageSrc}
        alt={`${whisky.brand} - ${whisky.name}`}
      />
      <h2>{whisky.brand}</h2>
      <h3>{whisky.name}</h3>
      <h4>
        {whisky.average_rating}
        <span>%</span>
      </h4>
      <p>{whisky.description}</p>

      <BackButton>X</BackButton>
    </div>
  );
};

WhiskyDetailItem.propTypes = {
  whisky: shape({
    average_rating: number,
    brand: string,
    id: string,
    name: string,
  }).isRequired,
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
