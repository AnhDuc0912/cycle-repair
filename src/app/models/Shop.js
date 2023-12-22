const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Shop = new Schema({
    id: ObjectId,
    name: { type: String, default: '', require: true },
    tel: { type: String, default: '', require: true },
    email: { type: String, default: '', require: true },
    address: { type: String, default: '', require: true },
    timeOpened: { type: String, require: true },
    timeClosed: { type: String, require: true },
}, {
    timestamps: true
})

module.exports = mongoose.model('Shop', Shop);