import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data_services/data-meetings.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faUsers,
  faStopwatch,
  faCrosshairs,
  faTools,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

const OneMeeting = () => {
  // get the meeting type from the end of the current url
  let { meetingType } = useParams();
  // find in the data file the object of the currently rendered meeting
  let currentMeeting = data.meetings.find(
    (element) => element.type === meetingType,
  );
  // create the To Do List based on array from data.json
  const toDoList = currentMeeting.toDo.map((task) => {
    return (
      <li>
        <FontAwesomeIcon icon={faCheck} />
        {task}
      </li>
    );
  });

  return (
    <div>
      <h3>{currentMeeting.name}</h3>
      <p>
        <FontAwesomeIcon icon={faCalendarAlt} />
        <strong>When - </strong>
        {currentMeeting.when}
      </p>
      <p>
        <FontAwesomeIcon icon={faUsers} />
        <strong>Who - </strong>
        {currentMeeting.who}
      </p>
      <p>
        <FontAwesomeIcon icon={faStopwatch} />
        <strong>How long - </strong>
        {currentMeeting.duration}
      </p>
      <p>
        <FontAwesomeIcon icon={faCrosshairs} />
        <strong>Aims - </strong>
        {currentMeeting.aims}
      </p>
      <p>
        <FontAwesomeIcon icon={faTools} />
        <strong>How to - </strong>
        {currentMeeting.how}
      </p>
      <ul>{toDoList}</ul>
    </div>
  );
};

export default OneMeeting;
