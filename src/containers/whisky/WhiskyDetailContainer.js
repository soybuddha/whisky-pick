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
  fetchWhiskies,
  fetchWhiskyById,
} from '../../store/actions';
import WhiskyDetail from '../../components/whisky/WhiskyDetail';

class WhiskyDetailContainer extends React.Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    const { distilleryId, whiskyId } = this.props.match.params;
    const id = `${distilleryId}-${whiskyId}`;
    const { allWhiskies } = this.props;

    if (allWhiskies.length) {
      this.props.fetchWhiskyById(id, allWhiskies).then(() => {
        this.setState({ isLoading: false });
      }).catch(err => err);
      return;
    }

    this.props.fetchWhiskies().then(response => {
      Promise.resolve(this.props.fetchWhiskyById(id, response.data)).then(() => {
        this.setState({ isLoading: false });
      });
    }).catch(err => err);
  }

  render() {
    return (
      <WhiskyDetail
        isLoading={this.state.isLoading}
        whisky={this.props.selectedWhisky}
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
  fetchWhiskies: func.isRequired,
  selectedWhisky: object.isRequired,
  fetchWhiskyById: func.isRequired,
};

export default withRouter(connect(mapStateToProps, {
  fetchWhiskies,
  fetchWhiskyById,
})(WhiskyDetailContainer));
