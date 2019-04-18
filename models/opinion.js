const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const opinionSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    device: String,
    comment: String
})

module.exports = mongoose.model('Opinion', opinionSchema);
