const Scrumlist = require('./scrumlists.schema');

// TEST
scrumlistsTest = (req, res) => {
  res.json({
    message: 'test from scrumlists is here!',
  });
};

// get all scrum lists from DB
const getAllLists = (req, res) => {
  Scrumlist.find({}, function (err, resp) {
    if (resp.length === 0) {
      res.send('There are no lists in the DB.');
    } else {
      res.send(resp);
    }
  });
};

// create a new scrum list, save to database
const createNewList = (req, res) => {
  // check if the req.body has a title - if not, reject saving
  if (
    req.body.title === '' ||
    req.body.title === undefined ||
    req.body.title === null
  ) {
    res
      .status(400)
      .json({ message: 'List missing the title, saving rejected' });
  } else {
    // create a new instance of a list with data from req body
    let newList = new Scrumlist({
      title: req.body.title,
      descr: req.body.descr,
    });

    // save the new instance to the DB
    newList
      .save()
      .then((result) => {
        console.log('New list saved to DB: ' + result);
        res.status(201).json(newList);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: 'error when trying to save new list to DB' });
        console.log('Error when trying to save new list: ' + err);
      });
  }
};

// get one list by ID
const getListByID = (req, res) => {
  Scrumlist.findById(req.params.list_id)
    .then((result) => {
      if (!result || result === null) {
        return res
          .status(404)
          .json({ message: 'No list found for this ID' })
          .end();
      }

      console.log(result);
      return res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: 'Server error - list fetching failed',
      });
    });
};

// delete one list by ID
const deleteListByID = (req, res) => {
  Scrumlist.findByIdAndRemove(req.params.list_id, (err, deletedList) => {
    // ex. if ID wrong format
    if (err) {
      console.log('Error when deleting list: ' + err);
      return res.status(500).json({
        message: 'Server error - list deleting failed',
      });
    }

    // if ID valid format, but not in DB
    if (!deletedList || deletedList === null) {
      return res
        .status(404)
        .json({ message: 'no result found for this ID' })
        .end();
    }

    console.log('Deleted list: ' + deletedList);
    return res.status(200).json({
      message: 'List successfully deleted',
      deletedList,
    });
  });
};

module.exports = {
  scrumlistsTest,
  getAllLists,
  createNewList,
  getListByID,
  deleteListByID,
};
