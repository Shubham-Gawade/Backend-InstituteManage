const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, validate: /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/, unique: true },
    courses: {type: Array , "default":[], required: true} 
});

module.exports = mongoose.model('studentdetails', studentSchema);