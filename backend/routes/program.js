const express = require('express');
const router = express.Router();
const programController = require('../controllers/programController');
const authMiddleware = require('../middleware/authMiddleware');

// Get all programs
router.get('/', programController.getAllPrograms);

// Get a single program by ID
router.get('/:id', programController.getProgramById);

// Protect the following routes
router.post('/', authMiddleware, programController.createProgram);
router.put('/:id', authMiddleware, programController.updateProgram);
router.delete('/:id', authMiddleware, programController.deleteProgram);

module.exports = router;

