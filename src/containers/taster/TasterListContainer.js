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
    this.props.fetchTasters().then(() => {
      this.setState({
        isLoading: false,
      });
    });
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

export default withRouter(connect(mapStateToProps, { fetchTasters })(TasterListContainer));
