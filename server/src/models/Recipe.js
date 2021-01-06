import mongoose from "mongoose";
const Schema = mongoose.Schema; 

const recipeSchema = new Schema ({
    name: String, 
    ingredients: [String], 
    steps: [String],
    meal: String 
});

module.exports = mongoose.model("Recipe", recipeSchema) 