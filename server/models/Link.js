const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkSchema = new Schema({
    title: {type: String, required: true},
    link: {type: String, required: true},
    description: String,
    userName: String
});

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;