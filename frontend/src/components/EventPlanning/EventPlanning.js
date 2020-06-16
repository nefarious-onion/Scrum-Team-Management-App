import React from 'react';
import EventForm from './EventForm';

const EventPlanning = () => {
  return (
    <>
      <div className="event-plan-heading">
        <h2>Plan your project</h2>
        <p>
          In the form below, put in your agreed meetings' dates and times. Save
          and they will appear in the calder section!
        </p>
      </div>
      <EventForm />
    </>
  );
};

export default EventPlanning;
