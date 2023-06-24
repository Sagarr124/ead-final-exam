import Recipe from "../models/recipeModel.js";

/* CREATE */
export const createRecipe = async (req, res) => {
  const { title, description, ingredients, instructions, image } = req.body;
  const newRecipe = new Recipe({
    title,
    description,
    ingredients,
    instructions,
    image,
  });
  
  try {
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

/* READ */
export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getRecipe = async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await Recipe.findById(id);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/* UPDATE */
export const updateRecipe = async (req, res) => {
  const { id } = req.params;
  const recipe = req.body;
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(id, recipe, {
      new: true,
    });
    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/* DELETE */
export const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  try {
    await Recipe.findByIdAndRemove(id);
    res.status(200).json({ message: "Recipe deleted successfully." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};