const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Booking = new Schema({
    id: ObjectId,
    idCustomer: { type: ObjectId, ref: 'Customers' },
    notes: { type: String, default: '', require: true },
    date: { type: Date, require: true },
    time: { type: Timestamp, require: true },
    status: { type: Number, require: true }
}, {
    timestamps: true
})

module.exports = mongoose.model('Booking', Booking);