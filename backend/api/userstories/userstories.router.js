// endpoints referencing functions from userstories.service
const userstoriesService = require('./userstories.service');
const express = require('express');
const router = express.Router({ mergeParams: true });

// TEST
router.get('/test', userstoriesService.userstoriesTest);

// get all the userstories from the DB
router.get('/', userstoriesService.getAllStories);

// create a new userstory
router.post('/', userstoriesService.createNewStory);

// get one story by ID
router.get('/:story_id', userstoriesService.getStoryByID);

// patch one story by ID
router.patch('/:story_id', userstoriesService.patchStoryByID);

// delete one story by ID
router.delete('/:story_id', userstoriesService.deleteStoryByID);

module.exports = router;
