require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');
const { StatusCodes } = require('http-status-codes');
const cors = require('cors');

/* -- DATABASE CONNECTION -- */

require('./config/db.config');

/* -- APP INSTANCE -- */

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN || ['http://localhost:5173', 'http://127.0.0.1:5173']
}))
app.use(logger('dev'));
app.use(express.json());

/* -- ROUTES --*/

const routes = require('./routes/routes.routes')
app.use('/', routes);

/* -- SERVER LISTENING -- */

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.info(`App listening on port ${port}`)
})