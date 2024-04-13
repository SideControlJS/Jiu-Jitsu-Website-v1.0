const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    time: String,
    instructor: String 
});

const Class = mongoose.model('Class', classSchema);

