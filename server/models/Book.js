const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    author: String,
    thumbnail: String,
    userName: String
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;