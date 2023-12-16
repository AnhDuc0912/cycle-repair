const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Accessary = new Schema({
    id: ObjectId,
    title: { type: String, default: '', require: true },
    quantity: { type: Number, default: 0, require: true },
    price: { type: Number, default: 0, require: true },
    price_sale: { type: Number, default: 0, require: true },
    slug: { type: String, slug: "title", unique: true },
    slugCat: { type: String, default: '', require: true },
}, {
    timestamps: true
})

module.exports = mongoose.model('Accessary', Accessary);