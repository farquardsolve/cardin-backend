const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clockSchema = new Schema({
    isCard: { type: Boolean, default: true },
    comment: { type: String, required: false },
    clockTime: { type: Date, required: false }
});
module.exports = clockSchema;