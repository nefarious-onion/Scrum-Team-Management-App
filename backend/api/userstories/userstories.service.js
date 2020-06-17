const Userstory = require('./userstories.schema');
const Scrumlist = require('../scrumlists/scrumlists.schema');

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
    // find the list where we want to ref this story by list id from endpoint param
    Scrumlist.findById(req.params.list_id)
      .then((returnedList) => {
        console.log('List found: ' + returnedList);
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
            // push the new story into top of the ref array of the list (from endpoint params)
            returnedList.stories.unshift(newStory);
            
            // save the new array to the entry in list collection
            returnedList.save();
            res.status(201).json(newStory);
          })
          .catch((err) => {
            res
              .status(500)
              .json({ message: 'error when trying to save new story to DB' });
            console.log('Error when trying to save new story: ' + err);
          });
        return returnedList;
      })
      .catch((err) => {
        console.log(
          'Error when fetching the list while cerating new story: ' + err,
        );
        res.status(500).json({
          message: 'error when fetching the list while creating new story',
        });
        return;
      });
  }
};

// get one story by ID
// works for existing IDs
// works for nonexisting IDs in the format of existing IDs ('no result found')
// for IDs in any different form than mongoose ID goes to .catch (Error: Argument passed in must be a single String of 12 bytes or a string of 24 hex characters)
const getStoryByID = (req, res) => {
  Userstory.findById(req.params.story_id)
    .then((result) => {
      if (!result || result === null) {
        return res
          .status(404)
          .json({ message: 'No result found for this ID' })
          .end();
      }

      console.log(result);
      return res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: 'Server error - story fetching failed',
      });
    });
};

// patch story by ID
// it takes the title and description form request - anything else is ignored
// it takes the title and description as they are - string, empty string, null if not provided !!!
const patchStoryByID = (req, res) => {
  // find the entry with ID
  const storyID = { _id: req.params.story_id };
  // what info will be updated
  const updatedStory = {
    title: req.body.title,
    descr: req.body.descr,
  };
  // return the updated entry instead of the original one
  const returnUpdatedEntry = { new: true };

  return Userstory.findOneAndUpdate(storyID, updatedStory, returnUpdatedEntry)
    .then((updatedDocument) => {
      if (!updatedDocument || updatedDocument === null) {
        console.log('No document matches the filter: ' + storyID);
        return res
          .status(404)
          .json({ message: 'No entry found for this ID' })
          .end();
      }

      console.log('Updated: ' + updatedDocument);
      return res
        .status(200)
        .json('Successfully updated document: ' + updatedDocument);
    })
    .catch((err) => {
      console.log('Error when updating story: ' + err);
      res.status(500).json({
        message: 'Server error - story updating failed',
      });
    });
};

// delete one story by ID
const deleteStoryByID = (req, res) => {
  const deletedStoryID = req.params.story_id;
  Userstory.findByIdAndDelete(deletedStoryID, (err, deletedStory) => {
    // ex. if ID wrong format
    if (err) {
      console.log('Error when deleting story: ' + err);
      return res.status(500).json({
        message: 'Server error - story deleting failed',
      });
    }

    // if ID valid format, but not in DB
    if (!deletedStory || deletedStory === null) {
      return res
        .status(404)
        .json({ message: 'no result found for this ID' })
        .end();
    }

    console.log('Deleted story: ' + deletedStory);
    return res.status(200).json({
      message: 'Story successfully deleted',
      deletedStory,
    });
  });
  // delete the ref to this ID from lists
  Scrumlist.find({}).then((allLists) => {
    allLists.forEach((list) => {
      const indexOfDeletedStory = list.stories.findIndex(
        (element) => element == deletedStoryID,
      );
      // if nothing found, it gives -1, so move on
      if (indexOfDeletedStory === -1) return;
      // if an element of the ID found, take it out of the list.stories array
      console.log(
        `found ${deletedStoryID} at index ${indexOfDeletedStory} in list ${list.title}`,
      );
      list.stories.splice(indexOfDeletedStory, 1);
      list.save();
    });
  });
};

module.exports = {
  userstoriesTest,
  getAllStories,
  createNewStory,
  getStoryByID,
  patchStoryByID,
  deleteStoryByID,
};
