import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.PureComponent {
  render() {
    return (
      <Link to="/">
        <h1>WhiskyPick</h1>
      </Link>
    );
  }
}

export default Header;
