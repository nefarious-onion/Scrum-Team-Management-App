import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

const EventCalendar = ({ events, timeZone }) => {

    return (
        <div>
            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin ]}
                timeZone={timeZone}
                weekends={true}
                weekNumbers={true}
                header={{
                    left: 'prev, next, ,dayGridMonth,timeGridWeek,timeGridDay,today, ',
                    center: 'title',
                    right: 'addEventButton,listWeek,listMonth'
                }}
                customButtons={{
                    addEventButton: {
                        text: 'Add event',
                        click: function() {
                            alert('Clicked a custom button!!!!')
                        }
                    }
                }}
                views={{
                    listWeek: { buttonText: 'events: week' },
                    listMonth: { buttonText: 'events: month' }
                }}
                firstDay={1}
                nowIndicator={true}
                businessHours={{
                    daysOfWeek: [ 1,2,3,4,5 ],
                    startTime: '09:30',
                    endTime: '15:00'
                }}
                events={events}
            />
        </div>
    );
}

export default EventCalendar;
