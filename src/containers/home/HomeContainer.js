import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { func, object } from 'prop-types';
import { fetchFavoriteWhiskies } from '../../store/actions';
import Home from '../../components/home/Home';

class HomeContainer extends React.Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    const { favoriteWhiskies } = this.props;

    if (Object.keys(favoriteWhiskies).length !== 0) {
      this.setState({ isLoading: false });
    } else {
      this.props.fetchFavoriteWhiskies().then(() => {
        this.setState({ isLoading: false });
      }).catch(err => err);
    }
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
    favoriteWhiskies: state.whiskies.favorites,
  };
};

HomeContainer.propTypes = {
  favoriteWhiskies: object.isRequired,
  fetchFavoriteWhiskies: func.isRequired,
};

export default withRouter(connect(mapStateToProps, {
  fetchFavoriteWhiskies,
})(HomeContainer));
