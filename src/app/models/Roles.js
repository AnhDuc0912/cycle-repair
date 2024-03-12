const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Roles = new Schema({
    id: ObjectId,
    title: { type: String, require: true, unique: true },
    permissions: [{type: ObjectId, require: true, ref: "Permissions"}]
})

module.exports = mongoose.model('Roles', Roles);