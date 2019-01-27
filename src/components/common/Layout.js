import React from 'react';
import { node } from 'prop-types';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
