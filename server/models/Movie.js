const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {type: String, required: true},
    plot: String,
    year: String,
    pic: String,
    rate: String,
    userName: String
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;