const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    available: Boolean
})

const item = mongoose.model('Item', itemSchema);
module.exports = item;
