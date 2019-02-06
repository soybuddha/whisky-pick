import React from 'react';
import {
  array,
  bool,
  object,
  number,
  shape,
  string,
} from 'prop-types';
import Loading from '../common/Loading';
import BackButton from '../common/BackButton';

const WhiskyDetailItem = React.memo(({ whisky }) => {
  const imageSrc = require(`../../assets/images/whiskies/${whisky.id}.jpg`);
  // const imageSrc = `/dist/src/assets/images/whiskies/${whisky.id}.jpg`;

  return (
    <>
      <a
        href={whisky.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={imageSrc}
          alt={`${whisky.brand} - ${whisky.name}`}
          className="whisky-detail-image"
        />
      </a>
      <BackButton>X</BackButton>
      <div className="whisky-detail-content">
        <h2>{whisky.brand}</h2>
        <h3>{whisky.name}</h3>
        <p>{whisky.description}</p>
      </div>
      <h4>
        {whisky.average_rating}
        <span>%</span>
      </h4>
    </>
  );
});

WhiskyDetailItem.propTypes = {
  whisky: shape({
    age: number.isRequired,
    average_rating: number.isRequired, //
    brand: string.isRequired, //
    description: string.isRequired, //
    event_date: string.isRequired,
    id: string.isRequired, //
    name: string.isRequired, //
    origin: string.isRequired,
    price: number.isRequired,
    profiles: array.isRequired,
    ratings: array.isRequired,
    type: string.isRequired,
    url: string.isRequired, //
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
