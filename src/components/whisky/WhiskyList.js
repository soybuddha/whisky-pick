import React from 'react';
import { Link } from 'react-router-dom';
import {
  array,
  bool,
  number,
  shape,
  string,
} from 'prop-types';
import { slugify } from '../../util';
import Loading from '../common/Loading';

const WhiskyListItem = React.memo(({ whisky }) => {
  const imageSrc = require(`../../assets/images/whiskies/${whisky.id}.jpg`);
  // const imageSrc = `/dist/src/assets/images/whiskies/${whisky.id}.jpg`;

  return (
    <Link
      to={`/whiskies/${slugify(whisky.brand)}/${slugify(whisky.name)}`}
      className="whisky-list-item"
    >
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
    </Link>
  );
});

WhiskyListItem.propTypes = {
  whisky: shape({
    average_rating: number,
    brand: string,
    id: string,
    name: string,
  }).isRequired,
};

const WhiskyList = ({ isLoading, whiskies }) => {
  return (
    <div className="whisky-list">
      {(isLoading)
        ? <Loading />
        : whiskies.map(whisky => <WhiskyListItem whisky={whisky} key={whisky.id} />)
      }
    </div>
  );
};

WhiskyList.propTypes = {
  isLoading: bool.isRequired,
  whiskies: array.isRequired,
};

export default WhiskyList;
