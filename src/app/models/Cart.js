const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Categories = new Schema({
    id: ObjectId,
    userID: { type: ObjectId, require: true },
    
}, {
    timestamps: true
})

module.exports = mongoose.model('Categories', Categories);