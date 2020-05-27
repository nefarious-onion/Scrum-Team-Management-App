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

module.exports = {
  userstoriesTest,
  getAllStories,
  createNewStory,
};
