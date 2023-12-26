const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Categories = new Schema({
    id: ObjectId,
    title: { type: String, default: '', require: true },
    slug: { type: String, slug: "title", unique: true },
}, {
    timestamps: true
})

module.exports = mongoose.model('Categories', Categories);