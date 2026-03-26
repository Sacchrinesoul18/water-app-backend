# Water App — Backend

## Overview
This is a Node.js + Express backend for WALRO (Water Level Alert & Route Optimizer).
It provides APIs for user authentication, community forum, weather data, and flood-aware routing.

## Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- OpenWeather API

## Setup Instructions
1. Clone the repository
2. Run: npm install
3. Create a .env file with:
   PORT=8000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   WEATHER_API_KEY=your_openweather_key
4. Run: node server.js
5. Server runs at http://localhost:8000

## API Endpoints

### Auth
- POST /api/auth/register → Register user
- POST /api/auth/login → Login user (returns JWT)

### Forum
-### Forum
- GET /api/forum → Get all posts
- POST /api/forum → Create post (requires authentication)
- POST /api/forum/:id/reply → Reply to a post (requires authentication)

### Weather
- GET /api/weather → Get current weather

### Map
- GET /api/map?from=X&to=Y → Get route + flood data

## Notes
- Use Thunder Client or Postman to test APIs
- Include JWT token in Authorization header:
  Authorization: Bearer <token>

  ## Features
- User authentication with JWT
- Community forum with posts and replies
- Real-time weather data integration
- Flood-aware routing support