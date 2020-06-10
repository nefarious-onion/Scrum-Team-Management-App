//require('dotenv').config();
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;
const isDev = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';
const FRONTEND_ORIGIN = 'http://localhost:3000';

const { handleError, Errorhandler } = require('./helpers/error');
const dbService = require('./api/db/db.service');
const userstoriesRouter = require('./api/userstories/userstories.router.js');
const scrumlistsRouter = require('./api/scrumlists/scrumlists.router');
const eventRouter = require('./api/calendar/event.router');

const app = express();
app.use(express.json());

// establish connection with the DB
dbService.DBconnection();

//check if env is development => use cors
//these have to be defined before the routes!!
if (isDev) {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', FRONTEND_ORIGIN);
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    next();
  });
}

// order of defining routes is important:
// api routes need to be defined before static paths
// router for handling scrum lists
app.use('/api/scrumlist', scrumlistsRouter);
// router for handling userstories
app.use('/api/scrumlist/:list_id/userstory', userstoriesRouter);
//router for events
app.use('/api/event', eventRouter);

//check if env is production => use static path
if (isProduction) {
  app.use(express.static(path.join(__dirname, '../', 'frontend', 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(
      path.join(__dirname, '../', 'frontend', 'build', 'index.html'),
    );
  });
}

// test endpoint
app.get('/ping', (req, res) => {
  res.send('hello world');
});

//error handling middleware
app.use((err, req, res, next) => {
  if (err) {
    handleError(err, res);
  } else {
    next()
  }
})

app.listen(PORT, () => {
  console.log('Server started', PORT);
  console.log('NODE_ENV =', process.env.NODE_ENV);
});
