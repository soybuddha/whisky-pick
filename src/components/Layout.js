import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div>WhiskyPick</div>
      {children}
    </div>
  );
};

export default Layout;
