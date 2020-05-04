const mongoose = require('mongoose');

const instituteSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    instituteName: { type: String, required: true, },
    instituteAddressLine1: { type: String, required: true, },
    instituteAddressLine2: { type: String, required: true, },
    state: { type: String,required: true, },
    city: { type: String,required: true, },
    pincode: { type: String,required: true, },
    ownerId: { type: String, required: true,unique: true }
});

module.exports = mongoose.model('Institute', instituteSchema);