// server/models/Schedule.js

const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  time: String,
  name: String,
  instructor: String,
  level: String,
});

const DayScheduleSchema = new mongoose.Schema({
  day: String,
  classes: [ClassSchema],
});

const ScheduleSchema = new mongoose.Schema({
  month: String,
  year: Number,
  days: [DayScheduleSchema],
});

module.exports = mongoose.model('Schedule', ScheduleSchema);