// server.js — Entry point for the backend
// Loads environment variables, connects to database, registers all routes

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/forum', require('./routes/forum'));
app.use('/api/weather', require('./routes/weather'));
app.use('/api/map', require('./routes/map'));

// Health check
app.get('/', (req, res) => res.send('Water App Backend is running'));

// Connect to MongoDB then start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));