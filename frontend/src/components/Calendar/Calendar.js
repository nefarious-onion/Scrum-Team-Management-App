import React, { useState, useEffect } from 'react';
import EventCalendar from './EventCalendar';
import { getEvents } from '../../api_services/event.service'
import './Calendar.css';

// let events = [
//     {title: "This is an event", start: "2020-06-17T10:30:00", end:  "2020-06-18T17:30:00"},
//     { title: 'event 1', start: '2020-07-01', daysOfWeek: [1, 2, 3] },
//     { title: 'event 2', start: '2020-06-24', color: "hotpink", description: "this is a new event"}
// ]

const Calendar = () => {
    const [timeZone, setTimezone] = useState('EEST');
    const [events, setEvents] = useState([]);

    useEffect(() => {
        getEvents()
            .then(events => {
                console.log(events)
                setEvents(events);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <EventCalendar events={events} timeZone={timeZone} />
        </div>
    );
}

export default Calendar;
