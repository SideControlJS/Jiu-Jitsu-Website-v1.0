const mongoose = require('mongoose');

// Define the Class schema
const ClassSchema = new mongoose.Schema({
  time: String,
  name: String,
  instructor: String,
  level: String,
});

// Define the Day schema
const DayScheduleSchema = new mongoose.Schema({
  day: String,
  classes: [ClassSchema],
});

// Define the main Schedule schema
const ScheduleSchema = new mongoose.Schema({
  month: String,
  year: Number,
  days: [DayScheduleSchema],
});

// Create a model from the schema (This is the model you should use in your controllers)
const Schedule = mongoose.model('Schedule', ScheduleSchema);

// Do not create an instance of the schema here; return the model
module.exports = Schedule;
