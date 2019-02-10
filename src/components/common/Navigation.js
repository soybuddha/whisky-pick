import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = React.memo(() => {
  return (
    <div className="navigation">
      <Link to="/whiskies">
        <i className="material-icons">local_bar</i>
        Whiskies
      </Link>
      <Link to="/tasters">
        <i className="material-icons">people</i>
        Tasters
      </Link>
    </div>
  );
});

export default Navigation;
