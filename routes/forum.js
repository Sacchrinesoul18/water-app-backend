// forum.js — Forum routes
const router = require('express').Router();
const verify = require('../middleware/verifyToken');
const { getPosts, createPost, replyToPost } = require('../controllers/forumController');

// GET /api/forum — get all posts (public)
router.get('/', getPosts);

// POST /api/forum — create post (login required)
router.post('/', verify, createPost);

// POST /api/forum/:id/reply — reply to post (login required)
router.post('/:id/reply', verify, replyToPost);

module.exports = router;