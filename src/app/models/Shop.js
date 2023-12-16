const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Shop = new Schema({
    id: ObjectId,
    idShop: { type: String, default: '', require: true },
    name: { type: String, default: '', require: true },
    address: { type: String, default: '', require: true },
    timeOpened: { type: Timestamp, require: true },
    timeClosed: { type: Timestamp, require: true },
}, {
    timestamps: true
})

module.exports = mongoose.model('Shop', Shop);