const mongoose = require('mongoose');

const exampleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userName: { type: String, required: true, },
    password: { type: String, required: true },
    status: { type: String, enum : ['Active','Archieved','Deleted'], default: 'Active',required: true}
});

module.exports = mongoose.model('Example', exampleSchema);