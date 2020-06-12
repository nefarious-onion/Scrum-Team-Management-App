import React, { useState } from 'react';

const EventForm = () => {
  const [saveMessage, setSaveMessage] = useState();
  const [showSaveMessage, setShowSaveMessage] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
  });

  // changes in inputs saved to state
  const handleInputChange = (event) => {
    setNewEvent({
      ...newEvent,
      [event.target.name]: event.target.value,
    });
  };

  // clicking "save" button adds event to calendar
  const addEvent = (event) => {
    event.preventDefault();
    if (newEvent.title === '' || newEvent.start === '') {
      setSaveMessage(
        <p style={{ color: 'red' }}>
          Title and start date are required - event not saved
        </p>,
      );
      console.log('Title and start date are required');
    } else {
      setSaveMessage(
        <p style={{ color: 'green' }}>Woohoo, new event saved!</p>,
      );
      console.log(
        `Ta daaa, event added to calendar - title: ${newEvent.title}, start: ${newEvent.start}`,
      );
    }
    setShowSaveMessage(true);
  };

  return (
    <>
      <form>
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
        <div className="form-section">
          <label htmlFor="start">Start date of event*:</label>
          <input
            id="start"
            name="start"
            type="date"
            value={newEvent.start}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-section">
          <label htmlFor="end">End date of event:</label>
          <input
            id="end"
            name="end"
            type="date"
            value={newEvent.end}
            onChange={handleInputChange}
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
