const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {type: String, required: true},
    description: String,
    pic: String,
    userName: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;