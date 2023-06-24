import express from "express";
import {
  getRecipe,
  getRecipes,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipeControllers.js";

const router = express.Router();

/* READ */
router.get("/", getRecipes);
router.get("/:id", getRecipe);

/* UPDATE */
router.patch("/:id", updateRecipe);

/* DELETE */
router.delete("/:id", deleteRecipe);

export default router;
