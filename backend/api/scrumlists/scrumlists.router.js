// endpoints referencing functions from scrumlists.service
const scrumlistsService = require('./scrumlists.service');
const express = require('express');
const router = express.Router(); // do I need ({mergeParams: true}) ??

// TEST
router.get('/testscrumlist', scrumlistsService.scrumlistsTest);

// get all the lists from the DB
router.get('/', scrumlistsService.getAllLists);

// create a new userstory
//router.post('/', userstoriesService.createNewStory);

// get one story by ID
//router.get('/:story_id', userstoriesService.getStoryByID);

// patch one story by ID
//router.patch('/:story_id', userstoriesService.patchStoryByID);

// delete one story by ID
//router.delete('/:story_id', userstoriesService.deleteStoryByID);

module.exports = router;
