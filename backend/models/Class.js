const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    time: String,
    instructor: String 
});

const Class = mongoose.model('Class', classSchema);

// Product model
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number
});

const Product = mongoose.model('Product', productSchema);