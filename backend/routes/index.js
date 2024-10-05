// server/routes/index.js

const express = require('express');
const router = express.Router();

const scheduleRoutes = require('./schedule');
const instructorRoutes = require('./instructor'); // Assuming you have this file
const programRoutes = require('./program'); // Assuming you have this file

router.use('/schedule', scheduleRoutes);
router.use('/instructor', instructorRoutes);
router.use('/program', programRoutes);

module.exports = router;
