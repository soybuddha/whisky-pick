import React from 'react';
import { Link } from 'react-router-dom';

const WhiskyList = () => {
  return (
    <div className="whisky-list">
      <Link to="/whisky/testdistillery/testwhisky">test</Link>
    </div>
  );
};

export default WhiskyList;
