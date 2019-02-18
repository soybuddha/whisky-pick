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
    const {
      favoriteWhiskies,
      allWhiskies,
      fetchWhiskies,
      fetchFavoriteWhiskies,
    } = this.props;

    if (Object.keys(favoriteWhiskies).length !== 0) {
      this.setState({ isLoading: false });
      return;
    }

    if (allWhiskies.length) {
      fetchFavoriteWhiskies(allWhiskies).then(() => {
        this.setState({ isLoading: false });
      }).catch(err => err);
      return;
    }

    fetchWhiskies().then(whiskies => {
      fetchFavoriteWhiskies(whiskies).then(() => {
        this.setState({ isLoading: false });
      });
    }).catch(err => err);
  }

  render() {
    const { isLoading } = this.state;
    const { favoriteWhiskies } = this.props;

    return (
      <Home
        isLoading={isLoading}
        favorites={favoriteWhiskies}
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
