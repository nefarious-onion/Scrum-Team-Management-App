import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data_services/data-meetings.json';
import Timer from './Timer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faUser,
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
      <div className="meeting-grid" key={task.id}>
        <div className="icon-style">
          <FontAwesomeIcon icon={faCheck} size={'2x'} />
        </div>
        <p>{task.task}</p>
      </div>
    );
  });

  return (
    <div>
      {/* <Timer /> */}
      <h3>{currentMeeting.name}</h3>
      <div className="meeting-grid">
        <div className="icon-style">
          <FontAwesomeIcon icon={faCalendarAlt} size={'2x'} />
        </div>
        <p>
          <strong>When - </strong>
          {currentMeeting.when}
        </p>

        <div className="icon-style">
          <FontAwesomeIcon icon={faUser} size={'2x'} />
        </div>
        <p>
          <strong>Who - </strong>
          {currentMeeting.who}
        </p>

        <div className="icon-style">
          <FontAwesomeIcon icon={faStopwatch} size={'2x'} />
        </div>
        <p>
          <strong>How long - </strong>
          {currentMeeting.duration}
        </p>

        <div className="icon-style">
          <FontAwesomeIcon icon={faCrosshairs} size={'2x'} />
        </div>
        <p>
          <strong>Aims - </strong>
          {currentMeeting.aims}
        </p>

        <div className="icon-style">
          <FontAwesomeIcon icon={faTools} size={'2x'} />
        </div>
        <p>
          <strong>How to - </strong>
          {currentMeeting.how}
        </p>
      </div>
      {toDoList}
    </div>
  );
};

export default OneMeeting;
