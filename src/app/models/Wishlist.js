const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Wishlist = new Schema({
    id: ObjectId,
    userId: { type: ObjectId, require: true, ref: 'Users' },
    productId: { type: ObjectId, require: true, ref: 'Accessarries' }
}, { timestamps : true })

module.exports = mongoose.model('Wishlist', Wishlist);