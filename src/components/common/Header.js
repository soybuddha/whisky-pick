import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header = React.memo(() => {
  return (
    <header className="header">
      <h1><Link to="/">whiskypick</Link></h1>
      <Navigation />
    </header>
  );
});

export default Header;
