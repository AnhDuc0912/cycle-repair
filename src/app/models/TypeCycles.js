const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TypeCycles = new Schema({
    id: ObjectId,
    title: { type: String, default: '', require: true },
    year: { type: Number, require: true },
    slug: { type: String, slug: "title", unique: true },
    brandSlug: { type: String, require: true }
}, {
    timestamps: true
})

module.exports = mongoose.model('TypeCycles', TypeCycles);