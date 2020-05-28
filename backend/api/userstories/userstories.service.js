const Userstory = require("./userstories.schema");

// ADD ERROR HANDLING!!

// TEST
userstoriesTest = (req, res) => {
  res.json({
    message: "your router is up and running",
  });
};

// get all the stories from DB
const getAllStories = (req, res) => {
  Userstory.find({}, function (err, resp) {
    if (resp.length === 0) {
      res.send("The userstory database is empty.");
    } else {
      res.send(resp);
    }
  });
};

// create a new userstory, save to database
const createNewStory = (req, res) => {
  // check if the req.body has a title - if not, reject saving
  if (
    req.body.title === "" ||
    req.body.title === undefined ||
    req.body.title === null
  ) {
    res
      .status(400)
      .json({ message: "Story missing the title, saving rejected" });
  } else {
    // create a new instance of a story with data from req body
    let newStory = new Userstory({
      title: req.body.title,
      descr: req.body.descr,
    });

    // save the new instance to the DB
    newStory
      .save()
      .then((result) => {
        console.log("New story saved to DB: " + result);
        res.status(201).json(newStory);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "error when trying to save new story to DB" });
        console.log("Error when trying to save new story: " + err);
      });
  }
};

// get one story by ID - !!!! works for existing IDs, can't handle the error though
// UnhandledPromiseRejectionWarning: CastError: Cast to ObjectId failed for value "5ece4f77d2914c203bbfa9" at path "_id" for model "Userstory"
const getStoryByID = (req, res) => {
  Userstory.findById(req.params.story_id).then((result) => {
    /* if (!result) {
      return res.status(404).end();
    } */
    console.log(result);
    return res.status(200).send(result);
  });
};

module.exports = {
  userstoriesTest,
  getAllStories,
  createNewStory,
  getStoryByID,
};
