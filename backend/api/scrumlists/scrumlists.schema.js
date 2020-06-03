const mongoose = require('mongoose');

// scrum list schema
const Schema = mongoose.Schema;

const scrumlistSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  descr: String,
  stories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Userstory',
    },
  ],
});

// scrum list model - creating in DB a collection called scrumlists
const Scrumlist = mongoose.model('Scrumlist', scrumlistSchema);

module.exports = Scrumlist;
