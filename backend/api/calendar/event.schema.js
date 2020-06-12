const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: Date,
    groupId: String,
    startTime: Object,
    endTime: Object,
    allDay: Boolean,
    startRecur: Date,
    endRecur: Date,
    daysOfWeek: [Number],
    color: String,
    descr: String
})
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;