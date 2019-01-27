import React from 'react';

const WhiskyDetail = ({ match: { params } }) => {
  const { distilleryId, whiskyId } = params;
  console.log('distilleryId', distilleryId, 'whiskyId', whiskyId);

  return (
    <div className="whisky-detail">
      <h2>Some Specific Whisky</h2>
    </div>
  );
};

export default WhiskyDetail;
