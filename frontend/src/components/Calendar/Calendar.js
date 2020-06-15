import React, { useState, useEffect } from 'react';
import EventCalendar from './EventCalendar';
import { getEvents, createEvent, deleteEvent } from '../../api_services/event.service'
import './Calendar.css';
import EditEventForm from './EditEventForm';

const Calendar = () => {
    const [timeZone, setTimezone] = useState('EEST');
    const [events, setEvents] = useState([]);
    const [showWeekends, setShowWeekends] = useState(false);
    const [showEventEdit, setShowEventEdit] = useState(false);
    const [eventToEdit, setEventToEdit] = useState(undefined);

    const fetchEvents = async () => {
        const _events = await getEvents();
        setEvents(_events);
    }

    const onToggleWeekend = () => {
        showWeekends ? setShowWeekends(false) : setShowWeekends(true);
    }

    const onDateClick = async (dateClickInfo) => {
        console.log(dateClickInfo);
        //dateClickInfo.dayEl.style.backgroundColor = 'red';
        if (window.confirm('would you like to add an event to ' + dateClickInfo.dateStr)) {
            try {
                const newEvent = {
                    title: 'new event',
                    start: dateClickInfo.date,
                    allDay: true,
                }
                await createEvent(newEvent);

            } catch (error) {
                console.log('Something went wrong', error);
            }
            fetchEvents();
        }
    }
    const onEventClick = (eventClickInfo) => {
        const event = eventClickInfo.event;
        setEventToEdit(event);
        setShowEventEdit(true);
    }
    const onCloseEventForm = () => {
        setShowEventEdit(false);
        setEventToEdit(undefined);
        fetchEvents();
    }

    const onEventDelete = async (id) => {
        await deleteEvent(id);
        fetchEvents();
        setShowEventEdit(false);
        setEventToEdit(undefined);
    }

    useEffect(() => {
        getEvents()
            .then(events => {
                console.log(events)
                setEvents(events);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            { showEventEdit 
                ? <EditEventForm 
                    eventToEdit={eventToEdit}
                    onCloseEventForm={onCloseEventForm}
                    onEventDelete={onEventDelete}
                /> 
                : null 
            }
            <div className='calendar-container'>
                <div className='calendar-edit-panel'>
                    <button onClick={onToggleWeekend}>Toggle weekend</button>


                </div>
                <div className='calendar-content'>
                    <EventCalendar
                        events={events}
                        timeZone={timeZone}
                        showWeekends={showWeekends}
                        onDateClick={onDateClick}
                        onEventClick={onEventClick}
                    />
                </div>

            </div>
        </>
    );
}

export default Calendar;
