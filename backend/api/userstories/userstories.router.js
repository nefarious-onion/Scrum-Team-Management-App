// endpoints referencing functions from userstories.service
const userstoriesService = require('./userstories.service');
const express = require('express');
const router = express.Router(); // do I need ({mergeParams: true}) ??

// TEST
router.get(
  '/api/scrumlist/:id/userstory/test',
  userstoriesService.userstoriesTest,
);

// get all the userstories from the DB
router.get('/api/scrumlist/:id/userstory', userstoriesService.getAllStories);

// create a new userstory
router.post('/api/scrumlist/:id/userstory', userstoriesService.createNewStory);

// get one story by ID
router.get(
  '/api/scrumlist/:id/userstory/:story_id',
  userstoriesService.getStoryByID,
);

// patch one story by ID
router.patch(
  '/api/scrumlist/:id/userstory/:story_id',
  userstoriesService.patchStoryByID,
);

// delete one story by ID
router.delete(
  '/api/scrumlist/:id/userstory/:story_id',
  userstoriesService.deleteStoryByID,
);

module.exports = router;
