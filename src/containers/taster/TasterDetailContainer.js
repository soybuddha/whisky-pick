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
    const { tasterId } = this.props.match.params;
    const { allTasters, allWhiskies } = this.props;

    if (allTasters.length && allWhiskies.length) {
      this.props.fetchTasterById(tasterId, allTasters, allWhiskies).then(() => {
        this.setState({ isLoading: false });
      }).catch(err => err);
    } else {
      Promise.all([
        this.props.fetchTasters(),
        this.props.fetchWhiskies(),
      ])
        .then((responses) => {
          this.props.fetchTasterById(tasterId, responses[0].data, responses[1].data).then(() => {
            this.setState({ isLoading: false });
          });
        }).catch(err => err);
    }
  }

  render() {
    return (
      <TasterDetail
        isLoading={this.state.isLoading}
        taster={this.props.selectedTaster}
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
