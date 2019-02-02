import React from 'react';
import { node } from 'prop-types';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <section className="app">
      <Header />
      <div className="container">
        {children}
      </div>
    </section>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
