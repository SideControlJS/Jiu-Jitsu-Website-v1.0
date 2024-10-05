const express = require('express');
const router = express.Router();
const programController = require('../controllers/programController');

// Get all programs
router.get('/', programController.getAllPrograms);

// Get a single program by ID
router.get('/:id', programController.getProgramById);

// Create a new program
router.post('/', programController.createProgram);

// Update a program
router.put('/:id', programController.updateProgram);

// Delete a program
router.delete('/:id', programController.deleteProgram);

module.exports = router;
