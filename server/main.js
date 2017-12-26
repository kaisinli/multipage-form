const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

// body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// logging middleware
app.use(morgan('dev'));

// serves static files
app.use(express.static(path.join(__dirname, '../public')));

// mount all of your API routes on /api. matches all requests to /api
app.use('/api', require('./api'));

// server should send its index.html for any requests that don't match one of our API routes.
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// handle 500 errors
app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
app.listen(port, function () {
    console.log("Knock, knock");
    console.log("Who's there?");
    console.log(`Your server, listening on port ${port}`);
});