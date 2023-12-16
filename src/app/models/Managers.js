const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Managers = new Schema({
    id: ObjectId,
    title: { type: String, default: '', require: true },
    phone: { type: String, default: '', require: true },
    idShop: { type: String, default: '', require: true },
    email: { type: String, default: '', require: true },
}, {
    timestamps: true
})

module.exports = mongoose.model('Managers', Managers);