import React from 'react';
import {
  array,
  bool,
} from 'prop-types';
import ScrollToTop from '../common/ScrollToTop';
import Loading from '../common/Loading';
import WhiskyListItem from './WhiskyListItem';

const WhiskyList = ({ isLoading, whiskies }) => {
  return (
    <ScrollToTop>
      <div className="whisky-list container-list">
        {(isLoading)
          ? <Loading />
          : whiskies.map(whisky => <WhiskyListItem whisky={whisky} key={whisky.id} />)
        }
      </div>
    </ScrollToTop>
  );
};

WhiskyList.propTypes = {
  isLoading: bool.isRequired,
  whiskies: array.isRequired,
};

export default WhiskyList;
