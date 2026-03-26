// forumController.js — Forum post creation, fetching, and replies
const Post = require('../models/Post');

// GET all posts — newest first
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// POST create a new post — requires login
exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = new Post({
      author: req.user.username,
      title,
      content,
    });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// POST reply to a post — requires login
exports.replyToPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    post.replies.push({
      author: req.user.username,
      content: req.body.content,
    });
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};