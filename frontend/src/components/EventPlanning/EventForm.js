import React, { useState } from 'react';

const EventForm = () => {
  const [eventOne, setEventOne] = useState({
    title: '',
    start: '',
  });

  // changes in inputs saved to state
  const handleInputChange = (event) => {
    setEventOne({
      ...eventOne,
      [event.target.name]: event.target.value,
    });
    console.log(eventOne);
    console.log(typeof eventOne.title);
    console.log(typeof eventOne.start);
  };

  // clicking "save" button adds event to calendar
  const addEvent = (event) => {
    event.preventDefault();
    console.log(
      `Ta daaa, event added to calendar - title: ${eventOne.title}, date: ${eventOne.start}`,
    );
  };

  return (
    <>
      <form>
        <div className="form-section">
          <h4>Event 1:</h4>
          <label htmlFor="title">Title of event 1:</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={handleInputChange}
          />
          <label htmlFor="start">Start date of event 1:</label>
          <input
            id="start"
            name="start"
            type="date"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" onClick={addEvent}>
          Save event to calendar
        </button>
      </form>
    </>
  );
};

export default EventForm;
