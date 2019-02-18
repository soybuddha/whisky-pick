import React from 'react';
import { Link } from 'react-router-dom';
import {
  number,
  shape,
  string,
} from 'prop-types';
import { Image } from 'cloudinary-react';
import { slugify } from '../../util';

const WhiskyListItem = React.memo(({ whisky, parentView }) => {
  return (
    <Link
      to={`/whiskies/${slugify(whisky.brand)}/${slugify(whisky.name)}`}
      className="whisky-list-item container-list-item"
    >
      <Image
        cloudName="kevinnayar"
        publicId={`whiskies/${whisky.id}.jpg`}
        width="300"
        crop="scale"
        alt={`${whisky.brand} - ${whisky.name}`}
        className="container-image"
      />

      <div className="container-detail">
        <h2>{whisky.brand}</h2>
        <h3>{whisky.name}</h3>
        {(parentView === 'taster')
          ? (
            <h4>
              {whisky.taster_rating}
              <span>%</span>
            </h4>
          )
          : (
            <h4>
              {whisky.average_rating}
              <span>%</span>
            </h4>
          )
        }
      </div>
    </Link>
  );
});

WhiskyListItem.propTypes = {
  whisky: shape({
    average_rating: number.isRequired,
    brand: string.isRequired,
    id: string.isRequired,
    name: string.isRequired,
  }).isRequired,
  parentView: string.isRequired,
};

export default WhiskyListItem;
