const mongoose = require('mongoose');

const DB_NAME = 'todo-project';
const URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const DB_URI = `${URI}/${DB_NAME}`;

mongoose.connect(DB_URI)
    .then(() => console.info(`Succesfully connected to the database ${DB_NAME}`))
    .catch((err) => {
        console.error(`An error ocurred trying to connect to the database ${DB_NAME}`, err)
        process.exit(0)
    })

process.on('SIGINT', () => {
    mongoose.connection.close()
    .then(function() {
        console.info(`Susccesfully disconnected from the database ${DB_NAME}`)
        process.exit(0)
    })
})