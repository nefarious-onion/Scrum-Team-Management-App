import React, { useState } from 'react';
import { createEvent } from '../../api_services/event.service';

const EventForm = () => {
  const [saveMessage, setSaveMessage] = useState();
  const [showSaveMessage, setShowSaveMessage] = useState(false);
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
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: {},
    end: undefined,
  });

  // changes in inputs saved to state - title
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

  // clicking "save" button adds event to calendar
  const addEvent = (event) => {
    event.preventDefault();
    // if title or start date are not provided, don't save the event
    if (newEvent.title === '' || startStrings.startDate === '') {
      setSaveMessage(
        <p style={{ color: 'red' }}>
          Title and start date are required - event not saved
        </p>,
      );
      console.log('Title and start date are required');
    } else {
      // if title and start date provided, prepare all the data and save

      // build a START DATE OBJECT from start date and start time strings
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

      // set the USER FEEDBACK MESSAGE
      setSaveMessage(
        <p style={{ color: 'green' }}>Woohoo, new event saved!</p>,
      );
      console.log(newEvent);
      // SAVE TO DB
      createEvent(newEvent);
    }
    // show the feedback message, positive or not
    setShowSaveMessage(true);
  };

  return (
    <>
      <form>
        {/* EVENT TITLE */}
        <div className="form-section">
          <label htmlFor="title1">Name of event*:</label>
          <input
            id="title"
            name="title"
            type="text"
            value={newEvent.title}
            onChange={handleInputChange}
          />
        </div>
        {/* EVENT START DATE */}
        <div className="form-section">
          <label htmlFor="startDate">Start date of event*:</label>
          <input
            id="startDate"
            name="startDate"
            type="date"
            value={startStrings.startDate}
            onChange={inputStartDateTime}
          />
        </div>
        {/* EVENT START TIME */}
        <div className="form-section">
          <label htmlFor="startTime">Start time of event:</label>
          <input
            id="startTime"
            name="startTime"
            type="time"
            value={startStrings.startTime}
            onChange={inputStartDateTime}
          />
        </div>
        {/* EVENT END DATE */}
        <div className="form-section">
          <label htmlFor="endDate">End date of event:</label>
          <input
            id="endDate"
            name="endDate"
            type="date"
            value={endStrings.endDate}
            onChange={inputEndDateTime}
          />
          <p>(If no end date provided, the event is marked as all day long)</p>
        </div>
        {/* EVENT END TIME */}
        <div className="form-section">
          <label htmlFor="endTime">End time of event:</label>
          <input
            id="endTime"
            name="endTime"
            type="time"
            value={endStrings.endTime}
            onChange={inputEndDateTime}
          />
        </div>
        <div>
          <p>Fields marked with * are required.</p>
        </div>
        {showSaveMessage && saveMessage}
        <button type="submit" onClick={addEvent}>
          Save event to calendar
        </button>
      </form>
    </>
  );
};

export default EventForm;
