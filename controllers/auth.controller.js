const User = require('../models/user.model');
const { StatusCodes } = require('http-status-codes')
const createError = require('http-errors');

module.exports.register = (req, res, next) => {
    
    const userData = {
        ...req.body,
        avatar: req.file ? req.file.path : undefined
    }

    User.create(userData)
    .then(user => {
        res.status(StatusCodes.CREATED).json(user)
    })
    .catch(next)
}