
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=cf097469ae9b2584ffcbc2ed3e59fde7&units=metric";

    console.log("CALLING WEATHER API...");

    const response = await fetch(url);
    const data = await response.json();

    console.log("API RESPONSE:", data);

    if (!response.ok) {
      return res.status(500).json({
        message: "Weather API error",
        error: data
      });
    }

    res.json({
      temperature: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description
    });

  } catch (error) {
    console.log("FETCH ERROR:", error);

    res.status(500).json({
      message: "Could not fetch weather",
      error: error.message
    });
  }
});

module.exports = router;