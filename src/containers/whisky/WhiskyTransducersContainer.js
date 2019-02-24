import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { array, func } from 'prop-types';
import {
  fetchProfiles,
  fetchTypes,
  fetchFilteredWhiskies,
} from '../../store/actions';
import WhiskyFilters from '../../components/whisky/WhiskyFilters';

class WhiskyTransducersContainer extends React.Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    const {
      profiles,
      fetchProfiles,
      types,
      fetchTypes,
    } = this.props;

    if (profiles.length && types.length) {
      this.setState({ isLoading: false });
      return;
    }

    Promise.all([
      fetchProfiles(),
      fetchTypes(),
    ])
      .then(() => {
        this.setState({ isLoading: false });
      }).catch(err => err);
  }

  render() {
    const { isLoading } = this.state;
    const {
      profiles,
      types,
      allWhiskies,
      fetchFilteredWhiskies,
    } = this.props;

    return (
      <WhiskyFilters
        isLoading={isLoading}
        whiskies={allWhiskies}
        profiles={profiles}
        types={types}
        filterWhiskies={fetchFilteredWhiskies}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    allWhiskies: state.whiskies.all,
    profiles: state.filters.profiles,
    types: state.filters.types,
  };
};

WhiskyTransducersContainer.propTypes = {
  allWhiskies: array.isRequired,
  profiles: array.isRequired,
  types: array.isRequired,
  fetchProfiles: func.isRequired,
  fetchTypes: func.isRequired,
  fetchFilteredWhiskies: func.isRequired,
};

export default withRouter(connect(mapStateToProps, {
  fetchProfiles,
  fetchTypes,
  fetchFilteredWhiskies,
})(WhiskyTransducersContainer));
