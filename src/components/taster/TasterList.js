import React from 'react';
import { Link } from 'react-router-dom';
import {
  array,
  bool,
  shape,
  string,
} from 'prop-types';
import Loading from '../common/Loading';

class TasterListItem extends React.PureComponent {
  render() {
    const { taster } = this.props;
    const imageSrc = require(`../../assets/images/tasters/${taster.id}.jpg`);
    // const imageSrc = `/dist/src/assets/images/tasters/${taster.id}.jpg`;

    return (
      <Link
        to={`/tasters/${taster.id}`}
        className="taster-list-item"
      >
        <img
          src={imageSrc}
          alt={`${taster.name}`}
        />
        <h2>{taster.name}</h2>
      </Link>
    );
  }
}

TasterListItem.propTypes = {
  taster: shape({
    id: string,
    name: string,
  }).isRequired,
};

const TasterList = ({ isLoading, tasters }) => {
  return (
    <div className="taster-list">
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
