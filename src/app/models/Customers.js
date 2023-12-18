const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Customers = new Schema({
    id: ObjectId,
    ho: { type: String, default: '', require: true },
    ten: { type: String, default: '', require: true },
    gioiTinh: { type: Boolean, require: true },
    phone: { type: String, default: '', require: true },
    email: { type: String, default: '', require: true },
    address: { type: String, default: '', require: true },
}, {
    timestamps: true
})

module.exports = mongoose.model('Customers', Customers);