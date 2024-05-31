const mongoose = require('mongoose');
//plugin to create slug
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Services = new Schema({
  id: ObjectId,
  title: { type: String, default: '', require: true, unique: true },
  description: { type: String, default: '' },
  image: { type: String, maxLength: 255 },
  slug: { type: String, slug: "title" },
});

module.exports = mongoose.model('Services', Services);

