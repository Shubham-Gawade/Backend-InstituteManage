const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    durationType: { type: String, required: true },
    durationValue: { type: String, required: true },
    fees: { type: Number, required: true },
    Institute_id: { type: String, required: true }
});

module.exports = mongoose.model('course', courseSchema);