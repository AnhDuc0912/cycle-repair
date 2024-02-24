const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Permissions = new Schema({
    id: { type: String, require: true },
    title: { type: String, require: true, unique: true },
}, {
    timestamps: true
})

module.exports = mongoose.model('Permissions', Permissions);