// server/routes/index.js

const express = require('express');
const router = express.Router();

// Import route modules
const scheduleRoutes = require('./schedule');
const programRoutes = require('./programs');
const instructorRoutes = require('./instructors');
const contactRoutes = require('./contact');

// Use route modules
router.use('/schedule', scheduleRoutes);
router.use('/programs', programRoutes);
router.use('/instructors', instructorRoutes);
router.use('/contact', contactRoutes);

module.exports = router;