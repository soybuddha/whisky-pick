import React from 'react';
import { Link } from 'react-router-dom';

const Home = React.memo(() => {
  return (
    <div className="home">
      <h2>Checkout the website</h2>
      <Link to="/whiskies">
        <p>Whiskies</p>
      </Link>
      <Link to="/tasters">
        <p>Tasters</p>
      </Link>
    </div>
  );
});

export default Home;
