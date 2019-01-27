import React from 'react';
import { Link } from 'react-router-dom';
import { number, shape, string } from 'prop-types';
import { slugify } from '../../util';

class WhiskyListItem extends React.PureComponent {
  render() {
    const { whisky } = this.props;

    return (
      <Link
        to={`/whisky/${slugify(whisky.brand)}/${slugify(whisky.name)}`}
        className="whisky-list-item"
      >
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
      </Link>
    );
  }
}

WhiskyListItem.propTypes = {
  whisky: shape({
    average_rating: number,
    brand: string,
    id: string,
    name: string,
  }).isRequired,
};

export default WhiskyListItem;
