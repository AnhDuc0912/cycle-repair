const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Bills = new Schema({
    id: ObjectId,
    idCustomer: { type: String, require: true },
    total: { type: Number, require: true },
    invoiceDate: { type: Date, require: true },
}, {
    timestamps: true
})

module.exports = mongoose.model('Bills', Bills);