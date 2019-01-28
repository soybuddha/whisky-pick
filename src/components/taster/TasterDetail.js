import React from 'react';
import { Link } from 'react-router-dom';
import {
  bool,
  object,
  shape,
  string,
} from 'prop-types';
import Loading from '../common/Loading';
import BackButton from '../common/BackButton';

const TasterDetailItem = ({ taster }) => {
  const imageSrc = require(`../../assets/images/tasters/${taster.id}.jpg`);
  // const imageSrc = `/dist/src/assets/images/tasters/${taster.id}.jpg`;

  return (
    <div>
      <img
        src={imageSrc}
        alt={`${taster.name}`}
      />
      <h2>{taster.name}</h2>

      <BackButton>X</BackButton>
    </div>
  );
};

TasterDetailItem.propTypes = {
  taster: shape({
    id: string,
    name: string,
  }).isRequired,
};

const TasterDetail = ({ isLoading, taster }) => {
  return (
    <div className="taster-detail">
      {(isLoading)
        ? <Loading />
        : <TasterDetailItem taster={taster} />
      }
    </div>
  );
};

TasterDetail.propTypes = {
  isLoading: bool.isRequired,
  taster: object.isRequired,
};

export default TasterDetail;
