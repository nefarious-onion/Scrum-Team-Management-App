const Userstory = require('./userstories.schema');

// ADD ERROR HANDLING!!

// TEST
userstoriesTest = (req, res) => {
  res.json({
    message: 'your router is up and running',
  });
};

// get all the stories from DB
const getAllStories = (req, res) => {
  Userstory.find({}, function (err, resp) {
    if (resp.length === 0) {
      res.send('The userstory database is empty.');
    } else {
      res.send(resp);
    }
  });
};

// create a new userstory, save to database
const createNewStory = (req, res) => {
  // check if the req.body has a title - if not, reject saving
  if (
    req.body.title === '' ||
    req.body.title === undefined ||
    req.body.title === null
  ) {
    res
      .status(400)
      .json({ message: 'Story missing the title, saving rejected' });
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
        console.log('New story saved to DB: ' + result);
        res.status(201).json(newStory);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: 'error when trying to save new story to DB' });
        console.log('Error when trying to save new story: ' + err);
      });
  }
};

// get one story by ID
// works for existing IDs
// works for nonexisting IDs in the format of existing IDs (no result found')
// for IDs in any different form than mongoose ID goes to .catch !!! (Error: Argument passed in must be a single String of 12 bytes or a string of 24 hex characters)
const getStoryByID = (req, res) => {
  Userstory.findById(req.params.story_id)
    .then((result) => {
      if (!result || result === null) {
        return res
          .status(404)
          .json({ message: 'no result found for this ID' })
          .end();
      }
      console.log(result);
      return res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: 'error when fetching single story by ID - wrong format of ID',
      });
    });
};

module.exports = {
  userstoriesTest,
  getAllStories,
  createNewStory,
  getStoryByID,
};
