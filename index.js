const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(cors());

if (process.env.DEV_ENVIRONMENT === 'development') {
	app.use(morgan('dev'));
}

app.use('/', require(path.join(__dirname, './routes/operationsRoute.js')));

app.get('/', (req, res) => res.send('Hello World!'));

module.exports = app;
