const mongoose = require('mongoose');

// Product model
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number
});

const Product = mongoose.model('Product', productSchema);