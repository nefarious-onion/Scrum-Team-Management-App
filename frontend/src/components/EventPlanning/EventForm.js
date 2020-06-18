import React, { useState } from 'react';
import { createEvent } from '../../api_services/event.service';
import './EventPlanning.css';

const EventForm = () => {
  const [saveMessage, setSaveMessage] = useState();
  const [showSaveMessage, setShowSaveMessage] = useState(false);

  // STATES KEEPING THE PIECES OF DATA FROM THE FORM

  const [startStrings, setStartStrings] = useState({
    startDate: '',
    startTime: '00:00',
    // startTime set to default - if not set here nor in inputs, it saves the next full o'clock from the time of saving (eg. at 14:48 it saves 15:00)
  });
  const [endStrings, setEndStrings] = useState({
    endDate: '',
    endTime: '',
    // endTime set to default - if not set here nor in inputs, it saves the next full o'clock from the time of saving (eg. at 14:48 it saves 15:00)
  });
  const [checkedRecurOption, setCheckedRecurOption] = useState('one-time');
  const [startRecurDate, setStartRecurDate] = useState('');
  const [endRecurDate, setEndRecurDate] = useState('');
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: {},
    end: undefined,
    daysOfWeek: [],
  });

  // INPUT CHANGE HANDLERS

  // changes in inputs saved to state - title (soon color or something else added here?)
  const handleInputChange = (event) => {
    setNewEvent({
      ...newEvent,
      [event.target.name]: event.target.value,
    });
  };

  // changes in inputs saved to state - start date, start time - strings
  const inputStartDateTime = (event) => {
    setStartStrings({
      ...startStrings,
      [event.target.name]: event.target.value,
    });
  };

  // changes in inputs saved to state - end date, end time - strings
  const inputEndDateTime = (event) => {
    setEndStrings({
      ...endStrings,
      [event.target.name]: event.target.value,
    });
  };

  // changes in inputs saved to state - recurrence days of week from radio buttons
  const recurrenceRadioBtns = (event) => {
    setCheckedRecurOption(event.target.value);
  };

  // changes in inputs saved to state - recurrence start date
  const inputStartRecurDate = (event) => {
    setStartRecurDate(event.target.value);
  };

  // changes in inputs saved to state - recurrence end date
  const inputEndRecurDate = (event) => {
    setEndRecurDate(event.target.value);
  };

  // CLICK "SAVE"
  // BUILD THE EVENT OBJECT IN THE CORRECT FORM
  // SAVE IT TO THE DB
  const addEvent = (event) => {
    event.preventDefault();
    // if title or start date are not provided, DON'T SAVE the event
    if (newEvent.title === '' || startStrings.startDate === '') {
      setSaveMessage(
        <p style={{ color: 'red' }}>
          Title and start date are required - event not saved
        </p>,
      );
      console.log('Title and start date are required');
    } else {
      // if title and start date provided, PREPARE DATA AND SAVE

      // build a START DATE OBJECT from start date and start time strings
      if (startStrings.startTime === '') {
        startStrings.startTime = '00:00';
      }
      newEvent.start = new Date(
        startStrings.startDate + 'T' + startStrings.startTime,
      );

      // if provided, build an END DATE OBJECT from end date and end time strings
      // if end date not provided, but time provided, default the date to start date
      if (endStrings.endDate === '' && endStrings.endTime !== '') {
        newEvent.end = new Date(
          startStrings.startDate + 'T' + endStrings.endTime,
        );
      }
      if (endStrings.endDate !== '') {
        // if endtime not provided, default to midnight
        if (endStrings.endTime === '') {
          endStrings.endTime = '23:59';
        }
        newEvent.end = new Date(endStrings.endDate + 'T' + endStrings.endTime);
      }

      // checked options - set RECURRENCE DAYS OF WEEK
      if (checkedRecurOption === 'daily-mon-fri') {
        newEvent.daysOfWeek = [1, 2, 3, 4, 5];
      } else if (checkedRecurOption === 'weekly-fri') {
        newEvent.daysOfWeek = [5];
      } else if (checkedRecurOption === 'weekly-mon') {
        newEvent.daysOfWeek = [1];
      } else {
        // 'one-time' checked or anything else
        newEvent.daysOfWeek = [];
      }

      // if provided, build START RECUR DATE OBJECT
      if (startRecurDate !== '') {
        newEvent.startRecur = new Date(startRecurDate + 'T00:00');
      }

      // if provided, build END RECUR DATE OBJECT
      if (endRecurDate !== '') {
        newEvent.endRecur = new Date(endRecurDate + 'T23:59');
      }

      // set the USER FEEDBACK MESSAGE
      setSaveMessage(
        <p style={{ color: 'green' }}>Woohoo, new event saved!</p>,
      );

      // SAVE TO DB
      createEvent(newEvent);
    }
    // show the feedback message, positive or not
    setShowSaveMessage(true);
  };

  return (
    <>
      <form className="event-form">
        {/* EVENT TITLE */}
        <div className="event-form-section">
          <label htmlFor="title1">
            <h4>Name of event*:</h4>
          <input
            id="title"
            name="title"
            type="text"
            value={newEvent.title}
            onChange={handleInputChange}
          />
          </label>
        </div>
        {/* EVENT START DATE */}
        <div className="event-form-section">
          <label htmlFor="startDate">
            <h4>Start date of event*:</h4>
          <input
            id="startDate"
            name="startDate"
            type="date"
            value={startStrings.startDate}
            onChange={inputStartDateTime}
          />
          </label>
        </div>
        {/* EVENT START TIME */}
        <div className="event-form-section">
          <label htmlFor="startTime">
            <h4>Start time of event:</h4>
          <input
            id="startTime"
            name="startTime"
            type="time"
            value={startStrings.startTime}
            onChange={inputStartDateTime}
          />
          </label>
        </div>
        {/* EVENT END DATE */}
        <div className="event-form-section">
          <label htmlFor="endDate">
            <h4>End date of event:</h4>
          <input
            id="endDate"
            name="endDate"
            type="date"
            value={endStrings.endDate}
            onChange={inputEndDateTime}
          />
          </label>
          
        </div>
        {/* EVENT END TIME */}
        <div className="event-form-section">
          <label htmlFor="endTime">
            <h4>End time of event:</h4>
          <input
            id="endTime"
            name="endTime"
            type="time"
            value={endStrings.endTime}
            onChange={inputEndDateTime}
          />
          <div className="event-form-note">(If no end date provided, the event is marked as all day long)</div>
          </label>
        </div>
        {/* RECURRENCE OF EVENT */}
        <div className="event-form-section">
          <h4>How often do you want this meeting to happen?</h4>
          <input
            type="radio"
            id="one-time"
            name="event-recur"
            value="one-time"
            checked={checkedRecurOption === 'one-time'}
            onChange={recurrenceRadioBtns}
          />
          <label htmlFor="one-time"> Just once</label>
          <br></br>
          <input
            type="radio"
            id="daily-mon-fri"
            name="event-recur"
            value="daily-mon-fri"
            checked={checkedRecurOption === 'daily-mon-fri'}
            onChange={recurrenceRadioBtns}
          />
          <label htmlFor="daily-mon-fri"> Every day Monday to Friday</label>
          <br></br>
          <input
            type="radio"
            id="weekly-fri"
            name="event-recur"
            value="weekly-fri"
            checked={checkedRecurOption === 'weekly-fri'}
            onChange={recurrenceRadioBtns}
          />
          <label htmlFor="weekly-fri"> Every week on Friday</label>
          <br></br>
          <input
            type="radio"
            id="weekly-mon"
            name="event-recur"
            value="weekly-mon"
            checked={checkedRecurOption === 'weekly-mon'}
            onChange={recurrenceRadioBtns}
          />
          <label htmlFor="weekly-mon"> Every week on Monday</label>
          <br></br>
        </div>
        {/* EVENT RECURRENCE START DATE */}
        <div className="event-form-section">
          <label htmlFor="startRecurDate">
            <h4>Start of the recurrence period:</h4>
          <input
            id="startRecurDate"
            name="startRecurDate"
            type="date"
            value={startRecurDate}
            onChange={inputStartRecurDate}
          />
          </label>
        </div>
        {/* EVENT RECURRENCE END DATE */}
        <div className="event-form-section">
          <label htmlFor="endRecurDate">
            <h4>End date of event:</h4>
          <input
            id="endRecurDate"
            name="endRecurDate"
            type="date"
            value={endRecurDate}
            onChange={inputEndRecurDate}
          />
          </label>
        </div>
        <div className="event-form-note">
          Fields marked with * are required.
        </div>
        {showSaveMessage && saveMessage}
        <button className="event-form-btn primary-btn" type="submit" onClick={addEvent}>
          Save event to calendar
        </button>
      </form>
    </>
  );
};

export default EventForm;
