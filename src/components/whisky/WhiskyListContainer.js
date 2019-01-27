import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { array, func } from 'prop-types';
import { fetchWhiskies } from '../../store/actions';
import WhiskyList from './WhiskyList';

class WhiskyListContainer extends React.Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    this.props.fetchWhiskies().then(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { allWhiskies } = this.props;

    return (
      <WhiskyList
        isLoading={this.state.isLoading}
        whiskies={allWhiskies}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    allWhiskies: state.whiskies.all,
  };
};

WhiskyListContainer.propTypes = {
  allWhiskies: array.isRequired,
  fetchWhiskies: func.isRequired,
};

export default withRouter(connect(mapStateToProps, {
  fetchWhiskies,
})(WhiskyListContainer));
