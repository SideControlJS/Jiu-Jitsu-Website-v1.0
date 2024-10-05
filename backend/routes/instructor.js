const express = require('express');
const router = express.Router();
const instructorController = require('../controllers/instructorController');

// Get all instructors
router.get('/', instructorController.getAllInstructors);

// Get a single instructor by ID
router.get('/:id', instructorController.getInstructorById);

// Create a new instructor
router.post('/', instructorController.createInstructor);

// Update an instructor
router.put('/:id', instructorController.updateInstructor);

// Delete an instructor
router.delete('/:id', instructorController.deleteInstructor);

module.exports = router;
