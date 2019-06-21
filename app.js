"use strict";

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/website');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/', express.static(__dirname + '/public'));
app.use('/', require('./public/publicRoutes'));
app.use('/users', require('./users/userRoutes'));

// Start the Server
const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
