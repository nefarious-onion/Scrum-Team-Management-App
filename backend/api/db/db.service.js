// DB connection
require('dotenv').config()
const mongoose = require('mongoose');

const DBconnection = () => {
  mongoose.connect(
    process.env.NODE_ENV_DB,
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
