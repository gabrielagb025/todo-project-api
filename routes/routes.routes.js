const router = require('express').Router();
const authController = require('../controllers/auth.controller');

/* MISC */ 

router.get('/', (req, res, next) => {
    res.json({message: 'Welcome to my todo api'})
})

/* AUTH */

router.post('/register', authController.register)

module.exports = router;