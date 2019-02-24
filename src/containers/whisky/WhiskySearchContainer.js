import React from 'react';
import { connect } from 'react-redux';
import { array, func } from 'prop-types';
import { fetchSearchResults } from '../../store/actions';
import WhiskySearch from '../../components/whisky/WhiskySearch';

class WhiskySearchContainer extends React.Component {
  render() {
    const {
      allWhiskies,
      whiskyNames,
      fetchSearchResults,
    } = this.props;

    return (
      <WhiskySearch
        whiskies={allWhiskies}
        whiskyNames={whiskyNames}
        fetchSearchResults={fetchSearchResults}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    allWhiskies: state.whiskies.all,
  };
};

WhiskySearchContainer.propTypes = {
  allWhiskies: array.isRequired,
  whiskyNames: array.isRequired,
  fetchSearchResults: func.isRequired,
};

export default connect(mapStateToProps, {
  fetchSearchResults,
})(WhiskySearchContainer);
