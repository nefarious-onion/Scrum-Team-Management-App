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

module.exports = {
  scrumlistsTest,
  getAllLists,
  createNewList,
};
