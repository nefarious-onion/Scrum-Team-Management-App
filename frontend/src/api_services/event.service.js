import axios from 'axios';
import { baseUrl } from './config';

const EVENT_URL = `${baseUrl}event`;

//get all events
/**
 * @returns {Promise} all events
 */
export const getEvents = () =>
    axios
        .get(EVENT_URL)
        .then(response => response.data)
        .catch(error => console.log('Something went wrong!', error));

//get one event
/**
 * 
 * @param {String} eventId 
 * @returns {Promise} single event
 */
export const getEvent = eventId =>
    axios
        .get(`${EVENT_URL}/${eventId}`)
        .then(response => response.data)
        .catch(error => console.log('Something went wrong!', error));

//create an event
/**
 * @param {Object} eventObject
 * @param {string} eventObject.title required - event title
 * @param {Date} eventObject.start required - start date (+ start time)
 * @param {Date} [eventObject.end] - end date (+ end time)
 * @param {string} [eventObject.groupId] - event group ie. holidays
 * @param {Object} [eventObject.startTime] - event start time (duration)
 * @param {string} [eventObject.startTime.year] 
 * @param {string} [eventObject.startTime.month]
 * @param {string} [eventObject.startTime.day]
 * @param {string} [eventObject.startTime.hour]
 * @param {string} [eventObject.startTime.minute] 
 * @param {Object} [eventObject.endTime] - event end time (duration)
 * @param {string} [eventObject.endTime.year]
 * @param {string} [eventObject.endTime.month]
 * @param {string} [eventObject.endTime.day]
 * @param {string} [eventObject.endTime.hour]
 * @param {string} [eventObject.endTime.minute]
 * @param {Boolean}[ eventObject.allDay] - true if no end time provided
 * @param {Date} [eventObject.startRecur] - event recurrence start date
 * @param {Date} [eventObject.endRecur] - event recurrence end date
 * @param {[Number]} [eventObject.daysOfWeek] - event recurrence week days 0-6 => Sunday 0
 * @param {string} [eventObject.color] - background and border color of event 
 * @param {string} [eventObject.descr] - event description
 * @returns {Promise} created event
 */
export const createEvent = async (eventObject) => {
    try {
        const response = await axios.post(EVENT_URL, eventObject);
        console.log('Event saved', response.data);
    } catch (error) {
        console.log('Event not saved', error);
    }
}

//update an event
/**
 * 
 * @param {Object} eventObject
 * @param {string} eventObject.title required - event title
 * @param {Date} eventObject.start required - start date (+ start time)
 * @param {Date} [eventObject.end] - end date (+ end time)
 * @param {string} [eventObject.groupId] - event group ie. holidays
 * @param {Object} [eventObject.startTime] - event start time (duration)
 * @param {string} [eventObject.startTime.year] 
 * @param {string} [eventObject.startTime.month]
 * @param {string} [eventObject.startTime.day]
 * @param {string} [eventObject.startTime.hour]
 * @param {string} [eventObject.startTime.minute] 
 * @param {Object} [eventObject.endTime] - event end time (duration)
 * @param {string} [eventObject.endTime.year]
 * @param {string} [eventObject.endTime.month]
 * @param {string} [eventObject.endTime.day]
 * @param {string} [eventObject.endTime.hour]
 * @param {string} [eventObject.endTime.minute]
 * @param {Boolean}[ eventObject.allDay] - true if no end time provided
 * @param {Date} [eventObject.startRecur] - event recurrence start date
 * @param {Date} [eventObject.endRecur] - event recurrence end date
 * @param {[Number]} [eventObject.daysOfWeek] - event recurrence week days 0-6 => Sunday 0
 * @param {string} [eventObject.color] - background and border color of event 
 * @param {string} [eventObject.descr] - event description
 * @returns {Promise} created event
 */
export const updateEvent = async (eventId, eventObject) => {
    try {
        const response = await axios.patch(`${EVENT_URL}/${eventId}`, eventObject);
        console.log('Story updated', response.data);
    } catch (error) {
        console.log('Event not updated', error);
    }
}

//delete an event
/**
 * 
 * @param {string} eventId
 * @returns {Promise} deleted event
 */
export const deleteEvent = async (eventId) => {
    try {
        const response = await axios.delete(`${EVENT_URL}/${eventId}`);
        console.log('Event deleted', response.data);
    } catch (error) {
        console.log('Event not deleted', error);
    }
}