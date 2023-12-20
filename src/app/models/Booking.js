const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Booking = new Schema({
    id: ObjectId,
    idCustomer: { type: ObjectId, ref: 'Customers', require: true },
    notes: { type: String, default: '' },
    date: { type: Date, require: true },
    time: { type: Date, require: true },
    status: { type: Boolean, require: true }
}, {
    timestamps: true
})

module.exports = mongoose.model('Booking', Booking);