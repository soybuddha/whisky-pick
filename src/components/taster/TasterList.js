import React from 'react';
import { Link } from 'react-router-dom';
import {
  array,
  bool,
  number,
  shape,
  string,
} from 'prop-types';
import Loading from '../common/Loading';

const TasterListItem = React.memo(({ taster }) => {
  const imageSrc = require(`../../assets/images/tasters/${taster.id}.jpg`);
  // const imageSrc = `/dist/src/assets/images/tasters/${taster.id}.jpg`;

  return (
    <Link
      to={`/tasters/${taster.id}`}
      className="taster-list-item container-list-item"
    >
      <img
        src={imageSrc}
        alt={`${taster.name}`}
        className="container-image"
      />

      <div className="container-detail">
        <h2>{taster.name}</h2>
        <h3>Member since {taster.member_since}</h3>
      </div>
    </Link>
  );
});

TasterListItem.propTypes = {
  taster: shape({
    id: string,
    name: string,
    member_since: number.isRequired,
  }).isRequired,
};

const TasterList = ({ isLoading, tasters }) => {
  return (
    <div className="taster-list container-list">
      {(isLoading)
        ? <Loading />
        : tasters.map(taster => <TasterListItem taster={taster} key={taster.id} />)
      }
    </div>
  );
};

TasterList.propTypes = {
  isLoading: bool.isRequired,
  tasters: array.isRequired,
};

export default TasterList;
