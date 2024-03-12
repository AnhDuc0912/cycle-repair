const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    id: ObjectId,
    ho: { type: String, default: '', require: true },
    ten: { type: String, default: '', require: true },
    phone: { type: String, default: '', require: true, unique: true },
    email: { type: String, default: '', require: true },
    password: { type: String, default: '', require: true },
    role: { type: ObjectId, default: '', require: true, ref: "Roles" }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', User);