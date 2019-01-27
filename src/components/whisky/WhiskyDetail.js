import React from 'react';

const WhiskyDetail = ({ match: { params } }) => {
  const { distilleryId, whiskyId } = params;

  return (
    <div className="whisky-detail">
      <h2>Some Specific Whisky</h2>
    </div>
  );
};

export default WhiskyDetail;
