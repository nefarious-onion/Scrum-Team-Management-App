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

module.exports = {
  scrumlistsTest,
  getAllLists,
};
