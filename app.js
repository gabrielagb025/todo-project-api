require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

/* -- DATABASE CONNECTION -- */

require('./config/db.config');

/* -- APP INSTANCE -- */

const app = express();
app.use(express.json());

/* -- SERVER LISTENING -- */

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.info(`App listening on port ${port}`)
})