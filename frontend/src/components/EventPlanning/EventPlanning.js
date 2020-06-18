import React from 'react';
import rocketplanning from '../../assets/rocketplanning__flatline.svg';
import EventForm from './EventForm';
import './EventPlanning.css';

const EventPlanning = () => {
  return (
    <div className="event-planning-grid">
      <div className="event-plan-grid-wrap">
      <div className="event-plan-heading">
        <h2>Plan your project</h2>
        <p>
          In the form below, put in your agreed meeting's dates and times. Save
          and they will appear in the calendar section!
        </p>
      </div>
      <EventForm />
      </div>
      <img src={rocketplanning} alt="rocket planning" />
    </div>
  );
};

export default EventPlanning;
