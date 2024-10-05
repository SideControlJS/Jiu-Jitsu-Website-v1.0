const mongoose = require('mongoose');

const ProgramSchema = new mongoose.Schema({
  name: String,
  description: String,
  duration: String, // e.g., "6 weeks", "12 weeks"
  level: String // e.g., "Beginner", "Intermediate", "Advanced"
});

module.exports = mongoose.model('Program', ProgramSchema);
