import React from 'react';
import { bool, node } from 'prop-types';
import Header from './Header';
import Loading from './Loading';

const Layout = ({ isLoading, children }) => {
  return (
    <section className="container">
      <Header />
      {(isLoading) ? <Loading /> : children}
    </section>
  );
};

Layout.propTypes = {
  isLoading: bool.isRequired,
  children: node.isRequired,
};

export default Layout;
