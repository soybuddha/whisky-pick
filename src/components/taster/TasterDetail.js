import React from 'react';
import {
  bool,
  object,
  shape,
  string,
} from 'prop-types';
import { Image } from 'cloudinary-react';
import Loading from '../common/Loading';
import BackButton from '../common/BackButton';
import WhiskyList from '../whisky/WhiskyList';

const TasterDetailItem = React.memo(({ taster }) => {
  return (
    <>
      <div className="taster-detail-content">
        <Image
          cloudName="kevinnayar"
          publicId={`tasters/${taster.id}.jpg`}
          width="140"
          crop="scale"
          alt={`${taster.name}`}
          className="taster-detail-image"
        />
        <div className="name">
          <h2>{taster.name}</h2>
          {(taster.whiskies.length >= 20)
            && (
              <div className="pro">
                <i className="material-icons">star</i>
                Pro
              </div>
            )
          }
        </div>
        <p>
          has rated&nbsp;
          {taster.whiskies.length}
          &nbsp;whiskies &nbsp;&nbsp;|&nbsp;&nbsp; member since&nbsp;
          {taster.member_since}
        </p>
        <BackButton />
      </div>

      <h3>Favorite whiskies</h3>
      <WhiskyList
        whiskies={taster.whiskies}
        parentView="taster"
        isLoading={false}
      />
    </>
  );
});

TasterDetailItem.propTypes = {
  taster: shape({
    id: string,
    name: string,
  }).isRequired,
};

const TasterDetail = ({ isLoading, taster }) => {
  return (
    <div className="taster-detail detail">
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
