import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.PureComponent {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <h1>WhiskyPick</h1>
        </Link>
      </header>
    );
  }
}

export default Header;
