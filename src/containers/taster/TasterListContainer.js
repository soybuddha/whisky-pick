import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { array, func } from 'prop-types';
import { fetchTasters } from '../../store/actions';
import TasterList from '../../components/taster/TasterList';

class TasterListContainer extends React.Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    const { allTasters, fetchTasters } = this.props;

    if (allTasters.length) {
      this.setState({ isLoading: false });
      return;
    }

    fetchTasters().then(() => {
      this.setState({ isLoading: false });
    }).catch(err => err);
  }

  render() {
    const { isLoading } = this.state;
    const { allTasters } = this.props;

    return (
      <TasterList
        isLoading={isLoading}
        tasters={allTasters}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    allTasters: state.tasters.all,
  };
};

TasterListContainer.propTypes = {
  allTasters: array.isRequired,
  fetchTasters: func.isRequired,
};

export default withRouter(connect(mapStateToProps, {
  fetchTasters,
})(TasterListContainer));
