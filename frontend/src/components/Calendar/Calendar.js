import React, { useState, useEffect } from 'react';
import EventCalendar from './EventCalendar';
import { getEvents } from '../../api_services/event.service'
import './Calendar.css';

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
