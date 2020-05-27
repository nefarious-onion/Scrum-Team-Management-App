const Userstory = require("./userstories.schema");

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

module.exports = {
  userstoriesTest,
  getAllStories,
};
