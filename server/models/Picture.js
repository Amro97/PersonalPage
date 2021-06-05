const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pictureSchema = new Schema({
    title: String,
    description: String,
    pic: {type: String, required: true},
    userName: String
});

const Picture = mongoose.model('Picture', pictureSchema);

module.exports = Picture;