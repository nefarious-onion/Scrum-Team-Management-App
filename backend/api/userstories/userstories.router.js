// endpoints referencing functions from userstories.service
const userstoriesService = require("./userstories.service");
const express = require("express");
const router = express.Router(); // do I need ({mergeParams: true}) ??

// TEST
router.get("/test", userstoriesService.userstoriesTest);

// get all the userstories from the DB
router.get("/", userstoriesService.getAllStories);

// create a new userstory
router.post("/", userstoriesService.createNewStory);

module.exports = router;
