import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.PureComponent {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <h1>WhiskyPick</h1>
        </Link>
        <Link to="/tasters">
          <p>Tasters</p>
        </Link>
      </header>
    );
  }
}

export default Header;
