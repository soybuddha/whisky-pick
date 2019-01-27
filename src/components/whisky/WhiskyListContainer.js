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
    const { whiskies } = this.props;

    return (
      <WhiskyList
        isLoading={this.state.isLoading}
        whiskies={whiskies}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    whiskies: state.whiskies,
  };
}

WhiskyListContainer.propTypes = {
  whiskies: array.isRequired,
  fetchWhiskies: func.isRequired,
};


export default withRouter(connect(mapStateToProps, {
  fetchWhiskies,
})(WhiskyListContainer));
