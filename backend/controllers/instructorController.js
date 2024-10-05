const Instructor = require('../models/Instructors');

// Get all instructors
exports.getAllInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.status(200).json(instructors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching instructors', error });
  }
};

// Get a single instructor by ID
exports.getInstructorById = async (req, res) => {
  try {
    const instructor = await Instructor.findById(req.params.id);
    if (!instructor) {
      return res.status(404).json({ message: 'Instructor not found' });
    }
    res.status(200).json(instructor);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching instructor', error });
  }
};

// Create a new instructor
exports.createInstructor = async (req, res) => {
  try {
    const newInstructor = new Instructor(req.body);
    await newInstructor.save();
    res.status(201).json(newInstructor);
  } catch (error) {
    res.status(400).json({ message: 'Error creating instructor', error });
  }
};

// Update an instructor
exports.updateInstructor = async (req, res) => {
  try {
    const updatedInstructor = await Instructor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedInstructor) {
      return res.status(404).json({ message: 'Instructor not found' });
    }
    res.status(200).json(updatedInstructor);
  } catch (error) {
    res.status(400).json({ message: 'Error updating instructor', error });
  }
};

// Delete an instructor
exports.deleteInstructor = async (req, res) => {
  try {
    const deletedInstructor = await Instructor.findByIdAndDelete(req.params.id);
    if (!deletedInstructor) {
      return res.status(404).json({ message: 'Instructor not found' });
    }
    res.status(200).json({ message: 'Instructor deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting instructor', error });
  }
};

