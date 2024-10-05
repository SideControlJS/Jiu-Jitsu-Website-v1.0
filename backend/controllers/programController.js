const Program = require('../models/Program');

// Get all programs
exports.getAllPrograms = async (req, res) => {
  try {
    const programs = await Program.find();
    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching programs', error });
  }
};

// Get a single program by ID
exports.getProgramById = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }
    res.status(200).json(program);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching program', error });
  }
};

// Create a new program
exports.createProgram = async (req, res) => {
  try {
    const newProgram = new Program(req.body);
    await newProgram.save();
    res.status(201).json(newProgram);
  } catch (error) {
    res.status(400).json({ message: 'Error creating program', error });
  }
};

// Update a program
exports.updateProgram = async (req, res) => {
  try {
    const updatedProgram = await Program.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProgram) {
      return res.status(404).json({ message: 'Program not found' });
    }
    res.status(200).json(updatedProgram);
  } catch (error) {
    res.status(400).json({ message: 'Error updating program', error });
  }
};

// Delete a program
exports.deleteProgram = async (req, res) => {
  try {
    const deletedProgram = await Program.findByIdAndDelete(req.params.id);
    if (!deletedProgram) {
      return res.status(404).json({ message: 'Program not found' });
    }
    res.status(200).json({ message: 'Program deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting program', error });
  }
};
