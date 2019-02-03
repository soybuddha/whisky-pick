import React from 'react';
import { withRouter } from 'react-router';
import { node } from 'prop-types';

class ScrollToTop extends React.PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return this.props.children;
  }
}

ScrollToTop.propTypes = {
  children: node.isRequired,
};

export default withRouter(ScrollToTop);
