// Post.js — Shape of a forum post and its replies
const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
  author:  { type: String, required: true },
  content: { type: String, required: true },
}, { timestamps: true });

const postSchema = new mongoose.Schema({
  author:  { type: String, required: true },
  title:   { type: String, required: true },
  content: { type: String, required: true },
  replies: [replySchema],
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);