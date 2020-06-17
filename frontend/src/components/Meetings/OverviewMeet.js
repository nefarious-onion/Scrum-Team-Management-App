import React from 'react';
import data from '../../data_services/data-meetings.json';

const OverviewMeet = () => {
  return (
    <div>
      <h2>{data.overview.title}</h2>
      <p>{data.overview.content.par1}</p>
      <p>{data.overview.content.par2}</p>
      <p>
        {data.overview.content.par3.part1}
        <a href="https://www.scrum.org/">scrum.org</a>
        {data.overview.content.par3.part2}
        <a href="https://www.atlassian.com/agile/scrum">altassian.com</a>
        {data.overview.content.par3.part3}
      </p>
    </div>
  );
};

export default OverviewMeet;
