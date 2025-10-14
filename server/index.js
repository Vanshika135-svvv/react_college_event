// server/index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // To allow React to talk to the backend

const app = express();
const PORT = 5000;

// Middleware (Must be defined first)
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// ==========================================================
// NEW ROOT ROUTE ADDED HERE 
// This route confirms the server is running when you visit http://localhost:5000
// ==========================================================
app.get('/', (req, res) => {
    res.send('Welcome to the College Events Backend API. Data is available at /api/events');
});
// ==========================================================

// 1. Database Connection (Make sure MongoDB is running!)
const DB_URI = 'mongodb://localhost:27017/collegeEventsDB'; 
mongoose.connect(DB_URI)
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error(err));

// 2. Define the Event Model (Schema)
const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  description: String,
});
const Event = mongoose.model('Event', EventSchema);

// 3. Define the API Route: GET /api/events
app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find({}); // Fetch all events
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});