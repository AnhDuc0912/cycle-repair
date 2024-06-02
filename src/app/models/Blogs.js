const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Blogs = new Schema({
    id: ObjectId,
    title: { type: String, require: true },
    slug: { type: String, require: true, unique: true, slug: "title" },
    description: { type: String, require: true },
    userId: { type: ObjectId, require: true, ref: 'Users' },
}, {
    timestamps: true
})

module.exports = mongoose.model('Blogs', Blogs);