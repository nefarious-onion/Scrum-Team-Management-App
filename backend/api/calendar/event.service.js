// @ts-check
const { ErrorHandler } = require('../../helpers/error');

const Event = require('./event.schema');

const getEvents = () => {
    return new Promise((resolve, reject) => {
        Event.find((error, events) => {
            if (error) {
                reject(error);
            } else {
                resolve(events);
            }
        })
    })
}

const getEvent = id => {
    return new Promise((resolve, reject) => {
        Event.findById(id, (error, event) => {
            if (error) {
                reject(error);
            } else {
                resolve(event);
            }
        })
    })
}


const createEvent = eventObject => {
    const event = new Event(eventObject)
    return event.save();
}

const updateEvent = async (id, eventObject) => {
    const { _id, ...restEventContent } = eventObject;
    const updatedEvent = await Event.findOneAndUpdate({ _id: id }, restEventContent, { new: true });
    return updatedEvent;
}

const deleteEvent = async (id) => {
    const deletedEvent = await Event.findOneAndDelete({ _id: id });
    return deletedEvent;
}
module.exports = {
    getEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
} 