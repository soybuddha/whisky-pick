import React from 'react';
import {
  array,
  bool,
  string,
} from 'prop-types';
import ScrollToTop from '../common/ScrollToTop';
import Loading from '../common/Loading';
import WhiskyListItem from './WhiskyListItem';

const WhiskyList = ({ isLoading, parentView, whiskies }) => {
  return (
    <ScrollToTop>
      <div className="whisky-list container-list">
        {(isLoading)
          ? <Loading />
          : whiskies.map(whisky => (
            <WhiskyListItem
              whisky={whisky}
              parentView={parentView}
              key={whisky.id}
            />
          ))
        }
      </div>
    </ScrollToTop>
  );
};

WhiskyList.defaultProps = {
  parentView: 'whisky',
};

WhiskyList.propTypes = {
  isLoading: bool.isRequired,
  parentView: string,
  whiskies: array.isRequired,
};

export default WhiskyList;
