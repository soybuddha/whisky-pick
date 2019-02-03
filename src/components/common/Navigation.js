import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = React.memo(() => {
  return (
    <div className="navigation">
      <Link to="/whiskies">Whiskies</Link>
      <Link to="/tasters">Tasters</Link>
    </div>
  );
});

export default Navigation;
