import React from 'react';
import { array, bool } from 'prop-types';
import Loading from '../common/Loading';
import WhiskyListItem from './WhiskyListItem';

const WhiskyList = ({ isLoading, whiskies }) => {
  console.log('isLoading: ', isLoading);
  console.log('whiskies: ', whiskies);
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
