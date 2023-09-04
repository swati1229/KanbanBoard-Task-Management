const express = require('express');
const { createUser, loginController } = require('../controllers/authController');
const router = express.Router()

//sign-up routes
router.post('/register', createUser);

//login routes
router.post('/login', loginController)

module.exports = router