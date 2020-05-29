require('dotenv').config();
const express = require('express');
const path = require('path');

const PORT = process.env.PORT;
const isDev = process.env.NODE_ENV || 'development';
const FRONTEND_ORIGIN = 'http://localhost:3000';

const dbService = require('./api/db/db.service');
const userstoriesRouter = require('./api/userstories/userstories.router.js');

const app = express();
app.use(express.json());

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
} else {
  app.use(express.static(path.join(__dirname, '../', 'frontend', 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(
      path.join(__dirname, '../', 'frontend', 'build', 'index.html'),
    );
  });
}

// establish connection with the DB
dbService.DBconnection();

// router for handling userstories
app.use('api/userstory', userstoriesRouter);

// test endpoint
app.get('/ping', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log('Server started', PORT);
  console.log('NODE_ENV =', process.env.NODE_ENV);
});
