require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');
const { StatusCodes } = require('http-status-codes');


/* -- DATABASE CONNECTION -- */

require('./config/db.config');

/* -- APP INSTANCE -- */

const app = express();
app.use(express.json());

/* -- ROUTES --*/

const routes = require('./routes/routes.routes')
app.use('/', routes);

/* -- SERVER LISTENING -- */

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.info(`App listening on port ${port}`)
})