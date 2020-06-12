// @ts-check

const express = require('express');
const router = express.Router();
const eventService = require('./event.service');
const { ErrorHandler } = require('../../helpers/error');

router.get('/', async (req, res, next) => {
    console.log('get all events')
    try {
        const events = await eventService.getEvents();
        res.json(events);
    } catch (error) {
        next(new ErrorHandler(500, 'Server Error'))
    }
})

router.get('/:event_id', async (req, res, next) => {
    console.log('get one event')
    try {
        const id = String(req.params.event_id);
        console.log(id);
        const event = await eventService.getEvent(id);
        res.json(event);
    } catch (error) {
        //error for wrong id
        if (error.name == "CastError") {
            next(new ErrorHandler(400, error.message));
        } else {
            next(new ErrorHandler(500, 'Server Error'));
        }
    }

})

router.post('/', async (req, res, next) => {
    console.log('create new event')
    try {
        const event = Object.assign({}, req.body);
        const { title, start } = event;
        console.log(event, title, start);
        if (!title || !start) {
            throw new ErrorHandler(404, 'Missing title and/or start data');
        }
        const newEvent = await eventService.createEvent(event);
        res
            .status(201)
            .json(newEvent)
    } catch (error) {
        next(new ErrorHandler(500, 'Server Error'));
    }
})

router.patch('/:event_id', async (req, res, next) => {
    console.log('patch an existing event')
    try {
        const id = String(req.params.event_id);
        const event = Object.assign({}, req.body);
        const { title, start } = event;
        if (!title || !start) {
            throw new ErrorHandler(404, 'Missing title and/or start data');
        }
        const updatedEvent = await eventService.updateEvent(id, event);
        res.json(updatedEvent)
    } catch (error) {
        //error for wrong id
        if (error.name == "CastError") {
            next(new ErrorHandler(400, error.message));
        } else {
            next(new ErrorHandler(500, 'Server Error'));
        }
       
    }
})

// router.delete('/:event_id', async (req, res, next) => {
router.delete('/:event_id', async (req, res, next) => {
    console.log('delete an event')
    try {
        const id = String(req.params.event_id);
        console.log(id);
        const deletedEvent = await eventService.deleteEvent(id);
        res.json(deletedEvent);
    } catch (error) {
        //error for wrong id
        if (error.name == "CastError") {
            next(new ErrorHandler(400, error.message));
        } else if (error.name == "MongooseError") {
            next(new ErrorHandler(500, 'Server Error'));
        } else {
            next(new ErrorHandler(500, 'Server Error'));
        }
    }
})

module.exports = router;