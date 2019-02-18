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
    const {
      allWhiskies,
      fetchWhiskyById,
      fetchWhiskies,
    } = this.props;
    const { distilleryId, whiskyId } = this.props.match.params;
    const id = `${distilleryId}-${whiskyId}`;

    if (allWhiskies.length) {
      fetchWhiskyById(id, allWhiskies).then(() => {
        this.setState({ isLoading: false });
      }).catch(err => err);
      return;
    }

    fetchWhiskies().then(whiskies => {
      fetchWhiskyById(id, whiskies).then(() => {
        this.setState({ isLoading: false });
      });
    }).catch(err => err);
  }

  render() {
    const { isLoading } = this.state;
    const { selectedWhisky } = this.props;

    return (
      <WhiskyDetail
        isLoading={isLoading}
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
  fetchWhiskies: func.isRequired,
  selectedWhisky: object.isRequired,
  fetchWhiskyById: func.isRequired,
};

export default withRouter(connect(mapStateToProps, {
  fetchWhiskies,
  fetchWhiskyById,
})(WhiskyDetailContainer));
