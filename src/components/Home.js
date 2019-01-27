import React from 'react';

const Home = ({ children }) => {
  return (
    <div className="container">
      <div>WhiskyPick</div>
      {children}
    </div>
  );
};

export default Home;
