const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Roles = new Schema({
    id: { type: String, require: true },
    title: { type: String, require: true, unique: true },
    permissions: [{type: String, ref: 'Permissions'}]
})

module.exports = mongoose.model('Roles', Roles);