// map.js — Returns route info and flood sensor data from Task 1's API
const router = require('express').Router();
const axios = require('axios');

// GET /api/map?from=LocationA&to=LocationB
router.get('/', async (req, res) => {
  try {
    const { from, to } = req.query;
    if (!from || !to) return res.status(400).json({ message: 'from and to are required' });

    const SENSOR_API = process.env.SENSOR_API_URL;
    const SENSOR_IDS = ['101', '102', '103'];

    // Fetch all sensors in parallel
    const sensorPromises = SENSOR_IDS.map(id =>
      axios.get(`${SENSOR_API}/sensor/${id}`)
        .then(r => r.data)
        .catch(() => null) // skip sensor if offline
    );

    const sensorResults = await Promise.all(sensorPromises);
    const sensors = sensorResults.filter(Boolean);

    // Flag sensors where water is critically high or rising fast
    const floodAlerts = sensors.filter(s => s.water_level > 50 || s.trend_1h > 5);

    res.json({
      from,
      to,
      message: `Route from ${from} to ${to}`,
      flood_sensors: sensors,
      flood_alerts: floodAlerts,
    });
  } catch (err) {
    res.status(500).json({ message: 'Map error', error: err.message });
  }
});

module.exports = router;