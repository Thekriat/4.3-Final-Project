var mongoose = require('mongoose');

var RecipeSchema = mongoose.Schema({
    category: String,
    name: String,
    ingredients: [String],
    directions: [String],
    nutritionFacts: [String]
});
module.exports = mongoose.model('Recipe', RecipeSchema);
module.exports.get = function(callback, limit) { Recipe.find(callback).limit(limit);
 }