// auth.js — Register and login routes
const router = require('express').Router();
const { register, login } = require('../controllers/authController');

// POST /api/auth/register — body: { username, email, password }
router.post('/register', register);

// POST /api/auth/login — body: { email, password } → returns { token, username }
router.post('/login', login);

module.exports = router;