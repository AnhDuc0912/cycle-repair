const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Permissions = new Schema({
    id: ObjectId,
    title: { type: String, require: true, unique: true },
})

module.exports = mongoose.model('Permissions', Permissions);