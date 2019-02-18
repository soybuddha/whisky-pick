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
    const { transducedWhiskies, fetchWhiskies } = this.props;

    if (transducedWhiskies.length) {
      this.setState({ isLoading: false });
      return;
    }

    fetchWhiskies().then(() => {
      this.setState({ isLoading: false });
    }).catch(err => err);
  }

  render() {
    const { isLoading } = this.state;
    const { transducedWhiskies } = this.props;

    return (
      <WhiskyList
        isLoading={isLoading}
        whiskies={transducedWhiskies}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    allWhiskies: state.whiskies.all,
    transducedWhiskies: state.whiskies.transduced,
  };
};

WhiskyListContainer.propTypes = {
  transducedWhiskies: array.isRequired,
  fetchWhiskies: func.isRequired,
};

export default withRouter(connect(mapStateToProps, {
  fetchWhiskies,
})(WhiskyListContainer));
