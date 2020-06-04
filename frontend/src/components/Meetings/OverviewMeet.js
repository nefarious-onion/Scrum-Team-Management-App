import React from 'react';
import data from '../../data.json';

const OverviewMeet = () => {
  return (
    <div>
      <h3>{data.overview.title}</h3>
      <p>{data.overview.content}</p>
    </div>
  );
};

export default OverviewMeet;
