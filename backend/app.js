const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;
const isDev = process.env.NODE_ENV === 'development';
const FRONTEND_ORIGIN = "http://localhost:3000";

const app = express();
app.use(express.json());

if (isDev) {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", FRONTEND_ORIGIN);
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        next();
    });
} else {
    app.use(express.static(path.join(__dirname, '../', 'front-end', 'build')));

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../', 'front-end', 'build', 'index.html'));
    });
}

app.get('/ping', (req, res) => {
    res.send('hello world');
});

app.listen(PORT, () => {
    console.log('Server started', PORT);
    console.log('NODE_ENV=', process.env.NODE_ENV)
})