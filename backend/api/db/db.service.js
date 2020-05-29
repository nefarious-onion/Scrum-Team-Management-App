// DB connection

const mongoose = require('mongoose');

const DBconnection = () => {
  mongoose.connect(
    'mongodb+srv://lira-api:liradev@cluster0-hgg6n.mongodb.net/lira?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
  );
  // useFinsAndModify set to false for deprecation warning when using findByIdAndDelete

  // DB connection error
  mongoose.connection.on('error', function (err) {
    console.log('Error while connecting to the database: ' + err);
  });

  // DB connection OK
  mongoose.connection.on('open', function () {
    console.log('Connected to database.');
  });
};

module.exports = { DBconnection };
