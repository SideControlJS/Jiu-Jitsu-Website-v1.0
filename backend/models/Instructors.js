const mongoose = require('mongoose');

const InstructorSchema = new mongoose.Schema({
  name: String,
  experience: Number, // years of experience
  specialties: [String] // Areas of expertise
});

module.exports = mongoose.model('Instructor', InstructorSchema);
