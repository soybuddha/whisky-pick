import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { array, func, object } from 'prop-types';
import { fetchWhiskies, fetchFavoriteWhiskies } from '../../store/actions';
import Home from '../../components/home/Home';

class HomeContainer extends React.Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    const { favoriteWhiskies, allWhiskies } = this.props;

    if (Object.keys(favoriteWhiskies).length !== 0) {
      this.setState({ isLoading: false });
      return;
    }

    if (allWhiskies.length) {
      this.props.fetchFavoriteWhiskies(allWhiskies).then(() => {
        this.setState({ isLoading: false });
      }).catch(err => err);
      return;
    }

    this.props.fetchWhiskies().then(whiskies => {
      this.props.fetchFavoriteWhiskies(whiskies).then(() => {
        this.setState({ isLoading: false });
      });
    }).catch(err => err);
  }

  render() {
    return (
      <Home
        favorites={this.props.favoriteWhiskies}
        isLoading={this.state.isLoading}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    allWhiskies: state.whiskies.all,
    favoriteWhiskies: state.whiskies.favorites,
  };
};

HomeContainer.propTypes = {
  allWhiskies: array.isRequired,
  fetchWhiskies: func.isRequired,
  favoriteWhiskies: object.isRequired,
  fetchFavoriteWhiskies: func.isRequired,
};

export default withRouter(connect(mapStateToProps, {
  fetchWhiskies,
  fetchFavoriteWhiskies,
})(HomeContainer));
