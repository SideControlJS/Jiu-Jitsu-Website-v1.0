// server/models/Schedule.js

const mongoose = require('mongoose');

// Class schema for each class
const ClassSchema = new mongoose.Schema({
  time: String,
  name: String,
  instructor: { type: String, default: "TBD" }, // Optional instructor field
  level: { type: String, default: "All Levels" } // Optional level field
});

// Schema for a day's schedule
const DayScheduleSchema = new mongoose.Schema({
  day: String,
  classes: [ClassSchema],
});

// Main schedule schema for a month
const ScheduleSchema = new mongoose.Schema({
  month: String,
  year: Number,
  days: [DayScheduleSchema],
});

// Example schedule for the month
const exampleSchedule = new ScheduleSchema({
  month: "October",
  year: 2024,
  days: [
    {
      day: "Monday",
      classes: [
        { time: "5:00pm-6:00pm", name: "Bullyproof/Junior Grapplers" },
        { time: "6:00pm-7:00pm", name: "Combatives" },
        { time: "7:00pm-8:00pm", name: "Master Cycle" },
      ]
    },
    {
      day: "Tuesday",
      classes: [
        { time: "5:00pm", name: "Bullyproof/Junior Grapplers" },
        { time: "6:00pm", name: "Combatives" },
        { time: "7:00pm", name: "Master Cycle" },
      ]
    },
    {
      day: "Wednesday",
      classes: [
        { time: "5:00pm", name: "Bullyproof/Junior Grapplers" },
        { time: "6:00pm", name: "Combatives" },
        { time: "7:00pm", name: "Master Cycle" },
      ]
    },
    {
      day: "Thursday",
      classes: [
        { time: "5:00pm", name: "Bullyproof/Junior Grapplers" },
        { time: "6:00pm", name: "Combatives" },
        { time: "7:00pm", name: "Master Cycle" },
      ]
    },
    {
      day: "Friday",
      classes: [
        { time: "5:00pm-6:00pm", name: "Bullyproof/Junior Grapplers" },
        { time: "6:00pm-7:00pm", name: "Combatives" },
        { time: "7:00pm-8:00pm", name: "Master Cycle" },
      ]
    },
    {
      day: "Saturday",
      classes: [
        { time: "10:00am-11:00am", name: "Bullyproof/Junior Grapplers" },
        { time: "11:00am-12:00pm", name: "Combatives" },
        { time: "12:00pm-1:00pm", name: "Master Cycle" },
        { time: "6:00pm-7:00pm", name: "Combatives" },
        { time: "7:00pm-8:00pm", name: "Master Cycle" },
      ]
    },
    {
      day: "Sunday",
      classes: [
        { time: "4:00pm-5:00pm", name: "Open Mat", level: "Blue belt+" },
        { time: "5:00pm-6:00pm", name: "Reflex Development", level: "All Levels" },
      ]
    }
  ]
});

module.exports = mongoose.model('Schedule', ScheduleSchema);