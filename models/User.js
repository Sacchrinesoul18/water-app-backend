// User.js — Shape of a user in the database
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true }, // stored as bcrypt hash, never plain text
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);