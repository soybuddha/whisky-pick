import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.PureComponent {
  render() {
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
  }
}

export default Home;
