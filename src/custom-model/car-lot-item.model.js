const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carLotItemSchema = new Schema({
    isOccupied: { type: Boolean, default: false },
    name: { type: String, required: false }
});
module.exports = carLotItemSchema;