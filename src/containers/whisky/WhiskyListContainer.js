import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { array, func } from 'prop-types';
import { fetchWhiskies } from '../../store/actions';
import WhiskyList from '../../components/whisky/WhiskyList';

class WhiskyListContainer extends React.Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    const { allWhiskies } = this.props;

    if (allWhiskies.length) {
      this.setState({ isLoading: false });
      return;
    }

    this.props.fetchWhiskies().then(() => {
      this.setState({ isLoading: false });
    }).catch(err => err);
  }

  render() {
    return (
      <WhiskyList
        whiskies={this.props.allWhiskies}
        isLoading={this.state.isLoading}
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
