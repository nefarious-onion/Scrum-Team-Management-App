import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data.json';

const OneMeeting = () => {
  // get the meeting type from the end of the current url
  let { meetingType } = useParams();
  // find in the data file the object of the currently rendered meeting
  let currentMeeting = data.meetings.find(
    (element) => element.type === meetingType,
  );

  return (
    <div>
      <h3>{currentMeeting.name}</h3>
      <p>
        <strong>When - </strong>
        {currentMeeting.when}
      </p>
      <p>
        <strong>Who - </strong>
        {currentMeeting.who}
      </p>
      <p>
        <strong>How long - </strong>
        {currentMeeting.duration}
      </p>
      <p>
        <strong>Aims - </strong>
        {currentMeeting.aims}
      </p>
      <p>
        <strong>How to - </strong>
        {currentMeeting.how}
      </p>
    </div>
  );
};

export default OneMeeting;
