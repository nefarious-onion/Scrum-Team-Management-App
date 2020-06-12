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
                    left: 'prev, next, today, listDay,listWeek,listMonth',
                    center: 'title',
                    right: 'addEventButton,dayGridMonth,timeGridWeek,timeGridDay'
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
                    listDay: { buttonText: 'list day' },
                    listWeek: { buttonText: 'list week' },
                    listMonth: { buttonText: 'list month' }
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
