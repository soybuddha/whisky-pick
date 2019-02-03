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
    const { allTasters } = this.props;

    if (allTasters.length) {
      this.setState({ isLoading: false });
      return;
    }

    this.props.fetchTasters().then(() => {
      this.setState({ isLoading: false });
    }).catch(err => err);
  }

  render() {
    return (
      <TasterList
        isLoading={this.state.isLoading}
        tasters={this.props.allTasters}
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
