// endpoints referencing functions from scrumlists.service
const scrumlistsService = require('./scrumlists.service');
const express = require('express');
const router = express.Router({ mergeParams: true });

// TEST
router.get('/testscrumlist', scrumlistsService.scrumlistsTest);

// get all the lists from the DB
router.get('/', scrumlistsService.getAllLists);

// create a new list
router.post('/', scrumlistsService.createNewList);

// get one list by ID
router.get('/:list_id', scrumlistsService.getListByID);

// patch one list by ID
//router.patch('/:list_id', scrumlistsService.);

// delete one list by ID
router.delete('/:list_id', scrumlistsService.deleteListByID);

module.exports = router;
