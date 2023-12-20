const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Customers = new Schema({
    id: ObjectId,
    ho: { type: String, require: true },
    ten: { type: String, require: true },
    gioiTinh: { type: Boolean, require: true },
    phone: { type: String, require: true },
    email: { type: String, require: true },
    address: { type: String, require: true },
}, {
    timestamps: true
})

module.exports = mongoose.model('Customers', Customers);