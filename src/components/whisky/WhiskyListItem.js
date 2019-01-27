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
        <h2>{whisky.name}</h2>
      </Link>
    );
  }
}

WhiskyListItem.propTypes = {
  whisky: shape({
    average_rating: number,
    brand: string,
    id: string,
    image_url: string,
    name: string,
  }).isRequired,
};

export default WhiskyListItem;
