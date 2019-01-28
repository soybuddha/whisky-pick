import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { array } from 'prop-types';
import WhiskyList from '../../components/whisky/WhiskyList';

const WhiskyListContainer = ({ allWhiskies }) => {
  return (
    <WhiskyList whiskies={allWhiskies} />
  );
};

const mapStateToProps = state => {
  return {
    allWhiskies: state.whiskies.all,
  };
};

WhiskyListContainer.propTypes = {
  allWhiskies: array.isRequired,
};

export default withRouter(connect(mapStateToProps, {})(WhiskyListContainer));
