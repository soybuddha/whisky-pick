import React from 'react';
import { node } from 'prop-types';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <section className="container">
      <Header />
      {children}
    </section>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
