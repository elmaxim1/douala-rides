const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let rides = [];

// Create ride
app.post("/rides", (req, res) => {
  const ride = req.body;
  ride.id = Date.now();
  rides.push(ride);
  res.json(ride);
});

// Get all rides
app.get("/rides", (req, res) => {
  res.json(rides);
});

// Accept ride
app.post("/accept/:id", (req, res) => {
  const ride = rides.find(r => r.id == req.params.id);
  if (ride) {
    ride.status = "accepted";
    res.json(ride);
  } else {
    res.status(404).send("Not found");
  }
});

app.listen(3000, () => console.log("Server running"));
