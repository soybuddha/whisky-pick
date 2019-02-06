import React from 'react';
import { withRouter } from 'react-router';
import { node, object } from 'prop-types';

class BackButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress, false);
  }

  handleKeyPress(evt) {
    if (evt.keyCode === 27) {
      this.handleClick();
    }
  }

  handleClick() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div
        className="back-btn"
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        role="button"
        tabIndex="0"
      >
        {this.props.children}
      </div>
    );
  }
}

BackButton.propTypes = {
  children: node.isRequired,
  history: object.isRequired,
};

export default withRouter(BackButton);
