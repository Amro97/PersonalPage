const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    quote: {type: String, required: true},
    author: String,
    userName: String
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;