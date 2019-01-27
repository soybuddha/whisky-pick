import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  array, func, object, shape, string,
} from 'prop-types';
import { fetchWhiskyById } from '../../store/actions';
import WhiskyDetail from './WhiskyDetail';

class WhiskyDetailContainer extends React.Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    const { allWhiskies } = this.props;
    const { distilleryId, whiskyId } = this.props.match.params;
    const id = `${distilleryId}-${whiskyId}`;

    this.props.fetchWhiskyById(id, allWhiskies).then(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { selectedWhisky } = this.props;

    return (
      <WhiskyDetail
        isLoading={this.state.isLoading}
        whisky={selectedWhisky}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    allWhiskies: state.whiskies.all,
    selectedWhisky: state.whiskies.selected,
  };
};

WhiskyDetailContainer.propTypes = {
  match: shape({
    params: shape({
      distilleryId: string.isRequired,
      whiskyId: string.isRequired,
    }).isRequired,
  }).isRequired,
  allWhiskies: array.isRequired,
  selectedWhisky: object.isRequired,
  fetchWhiskyById: func.isRequired,
};

export default withRouter(connect(mapStateToProps, {
  fetchWhiskyById,
})(WhiskyDetailContainer));