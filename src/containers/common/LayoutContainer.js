import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { func, node } from 'prop-types';
import { fetchWhiskies } from '../../store/actions';
import Layout from '../../components/common/Layout';

class LayoutContainer extends React.Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    this.props.fetchWhiskies().then(() => {
      this.setState({
        isLoading: false,
      });
    });
  }

  render() {
    return (
      <Layout isLoading={this.state.isLoading}>
        {this.props.children}
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    allWhiskies: state.whiskies.all,
  };
};

LayoutContainer.propTypes = {
  fetchWhiskies: func.isRequired,
  children: node.isRequired,
};

export default withRouter(connect(mapStateToProps, {
  fetchWhiskies,
})(LayoutContainer));
