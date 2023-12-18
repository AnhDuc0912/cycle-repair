const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Roles = new Schema({
    id: { type: String, require: true, unique: true },
    title: { type: String, default: '', require: true },
}, {
    timestamps: true
})

module.exports = mongoose.model('Roles', Roles);