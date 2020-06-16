import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faListUl, faTrashAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import './EditEventForm.css';

const weekdays = {
    "0": "Sunday",
    "1": "Monday",
    "2": "Tuesday",
    "3": "Wednesday",
    "4": "Thursday",
    "5": "Friday",
    "6": "Saturday",
}

const EditEventForm = ({ eventToEdit, onCloseEventForm, onEventDelete }) => {
    const { title, start, end, allDay, dateStr, extendedProps } = eventToEdit;
    console.log(eventToEdit);
    const id = extendedProps._id;
    console.log(id)
    const day = start.getUTCDay();
    const weekday = weekdays[day];
    const formattedStart = start.toLocaleDateString();
    const formattedEnd = null;
    if (end) {
         formattedEnd = end.toLocaleDateString();
    }
    

    const onDeleteClick = () => {
        if (window.confirm('Are you sure you want to delete the event?')) {
            onEventDelete(id);
        }
    }


    return (
        <>
            <div className='event-form__overlay' onClick={onCloseEventForm}></div>
            <div className='event-form__container'>
                <div className='event-form__editpanel'>
                    <h2>Edit event</h2>
                    <FontAwesomeIcon icon={faTrashAlt} size='2x' onClick={onDeleteClick} />
                    <FontAwesomeIcon icon={faTimes} size='2x' onClick={onCloseEventForm} />
                </div>
                <div className='event-form__content'>
                    <h3>{title}</h3>
                    <h4>{dateStr}</h4>
                    <h4>{weekday}</h4>
                    {allDay ? <h4>All day event</h4> : <h4>{formattedStart}</h4>}
                    {end ? <h4>{formattedEnd}</h4> : null}
                </div>

            </div>
        </>
    );
}

export default EditEventForm;
