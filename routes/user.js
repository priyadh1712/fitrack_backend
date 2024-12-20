const express = require('express');
const router = express.Router();
const { loginUser, signupUser, getUserProfile } = require('../controllers/userController');
const { requireAuth } = require('../middleware/requireAuth');

// Public routes
router.post('/login', loginUser);
router.post('/signup', signupUser);

// Protected route
router.get('/profile', requireAuth, getUserProfile);

module.exports = router;
