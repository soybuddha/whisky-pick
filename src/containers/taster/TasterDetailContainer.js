import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  array,
  func,
  object,
  shape,
  string,
} from 'prop-types';
import {
  fetchTasters,
  fetchTasterById,
  fetchWhiskies,
} from '../../store/actions';
import TasterDetail from '../../components/taster/TasterDetail';

class TasterDetailContainer extends React.Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    const {
      allTasters,
      allWhiskies,
      fetchTasters,
      fetchTasterById,
      fetchWhiskies,
    } = this.props;
    const { tasterId } = this.props.match.params;

    if (allTasters.length && allWhiskies.length) {
      fetchTasterById(tasterId, allTasters, allWhiskies).then(() => {
        this.setState({ isLoading: false });
      }).catch(err => err);
      return;
    }

    Promise.all([
      fetchTasters(),
      fetchWhiskies(),
    ])
      .then(response => {
        const [tasters, whiskies] = response;

        fetchTasterById(tasterId, tasters, whiskies).then(() => {
          this.setState({ isLoading: false });
        });
      }).catch(err => err);
  }

  render() {
    const { isLoading } = this.state;
    const { selectedTaster } = this.props;

    return (
      <TasterDetail
        isLoading={isLoading}
        taster={selectedTaster}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    allTasters: state.tasters.all,
    selectedTaster: state.tasters.selected,
    allWhiskies: state.whiskies.all,
  };
};

TasterDetailContainer.propTypes = {
  match: shape({
    params: shape({
      tasterId: string.isRequired,
    }).isRequired,
  }).isRequired,
  allTasters: array.isRequired,
  selectedTaster: object.isRequired,
  fetchTasterById: func.isRequired,
  allWhiskies: array.isRequired,
  fetchTasters: func.isRequired,
  fetchWhiskies: func.isRequired,
};

export default withRouter(connect(mapStateToProps, {
  fetchTasters,
  fetchTasterById,
  fetchWhiskies,
})(TasterDetailContainer));
