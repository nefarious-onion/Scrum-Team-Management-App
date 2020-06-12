import React, { useState } from 'react';
import EventCalendar from './EventCalendar';
import './Calendar.css';

let events = [
    {title: "This is an event", start: "2020-06-17T10:30:00", end:  "2020-06-18T17:30:00"},
    { title: 'event 1', date: '2020-07-01', daysOfWeek: [1, 2, 3] },
    { title: 'event 2', date: '2020-06-24', color: "hotpink", description: "this is a new event"}
]

const Calendar = () => {
    const [timeZone, setTimezone] = useState('EEST');
    
    return (
        <div>
           <EventCalendar events={events} timeZone={timeZone}/>
        </div>
    );
}

export default Calendar;
