// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;
const API_KEY = "123456789iotkey";

app.use(cors());

app.get("/api/data", (req, res) => {
  const key = req.query.apikey;

  if (key !== API_KEY) {
    return res.status(403).json({ error: "Forbidden: Invalid API key" });
  }

  const data = {
    temperature: (Math.random() * 10 + 25).toFixed(1),
    humidity: (Math.random() * 20 + 60).toFixed(1),
    pressure: (Math.random() * 20 + 1000).toFixed(1),
  };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
