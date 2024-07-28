const express = require('express');
const router = express.Router();
const Schedule = require('../models/Schedule');

// GET current month's schedule
router.get('/', async (req, res) => {
  try {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();

    let schedule = await Schedule.findOne({ month: currentMonth, year: currentYear });

    if (!schedule) {
      // If no schedule exists for the current month, create a default one
      schedule = new Schedule({
        month: currentMonth,
        year: currentYear,
        days: [
          // ... (default schedule data)
        ]
      });
      await schedule.save();
    }

    res.json(schedule);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST to update schedule
router.post('/update', async (req, res) => {
  try {
    const { month, year, days } = req.body;
    let schedule = await Schedule.findOne({ month, year });

    if (schedule) {
      schedule.days = days;
      await schedule.save();
    } else {
      schedule = new Schedule({ month, year, days });
      await schedule.save();
    }

    res.json(schedule);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;