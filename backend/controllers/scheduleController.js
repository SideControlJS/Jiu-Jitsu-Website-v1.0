const Schedule = require('../models/Schedule');

// Get all schedules
exports.getAllSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.status(200).json(schedules);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching schedules', error });
  }
};

// Get a single schedule by ID
exports.getScheduleById = async (req, res) => {
  try {
    const schedule = await Schedule.findById(req.params.id);
    if (!schedule) {
      return res.status(404).json({ message: 'Schedule not found' });
    }
    res.status(200).json(schedule);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching schedule', error });
  }
};

// Create a new schedule
exports.createSchedule = async (req, res) => {
  try {
    console.log('Request Body:', req.body); //Logs incoming request body to the console
    // Explicitly create a new schedule object from the request body
    const { month, year, days } = req.body;

    // Ensure that the 'days' array is included and properly structured
    const newSchedule = new Schedule({
      month,
      year,
      days  // Include the array of days
    });

    // Save the new schedule to the database
    await newSchedule.save();

    // Return the newly created schedule
    res.status(201).json(newSchedule);
  } catch (error) {
    res.status(400).json({ message: 'Error creating schedule', error });
  }
};

// Update a schedule
exports.updateSchedule = async (req, res) => {
  try {
    const updatedSchedule = await Schedule.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },  // Use $set to update only the provided fields
      { new: true, runValidators: true }  // Return the updated document and run schema validation
    );
    
    if (!updatedSchedule) {
      return res.status(404).json({ message: 'Schedule not found' });
    }

    res.status(200).json(updatedSchedule);
  } catch (error) {
    res.status(400).json({ message: 'Error updating schedule', error });
  }
};

// Delete a schedule
exports.deleteSchedule = async (req, res) => {
  try {
    const deletedSchedule = await Schedule.findByIdAndDelete(req.params.id);
    if (!deletedSchedule) {
      return res.status(404).json({ message: 'Schedule not found' });
    }
    res.status(200).json({ message: 'Schedule deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting schedule', error });
  }
};

