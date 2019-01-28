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
import { fetchTasterById, fetchTasterWhiskiesById } from '../../store/actions';
import TasterDetail from '../../components/taster/TasterDetail';

class TasterDetailContainer extends React.Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    const { tasterId } = this.props.match.params;
    const { allTasters, allWhiskies } = this.props;

    this.props.fetchTasterById(tasterId, allTasters).then(() => {
      this.props.fetchTasterWhiskiesById(tasterId, allWhiskies).then((result) => {
        console.log(result);
        this.setState({
          isLoading: false,
        });
      });
    });
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
  fetchTasterWhiskiesById: func.isRequired,
};

export default withRouter(connect(mapStateToProps, {
  fetchTasterById,
  fetchTasterWhiskiesById,
})(TasterDetailContainer));
