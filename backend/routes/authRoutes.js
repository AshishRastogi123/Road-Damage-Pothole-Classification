const express = require('express');
const { signup, login, verifyToken } = require('../controllers/authController');

const router = express.Router();

// Routes
router.post('/signup', signup);
router.post('/login', login);
router.get('/verify', verifyToken);

module.exports = router;
