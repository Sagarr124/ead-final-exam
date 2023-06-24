import express from "express";
import {
  getRecipe,
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipeControllers.js";

const router = express.Router();

/* CREATE */
// router.post("/", createRecipe);

/* READ */
router.get("/", getRecipes);
router.get("/:id", getRecipe);

/* UPDATE */
router.patch("/:id", updateRecipe);

/* DELETE */
router.delete("/:id", deleteRecipe);

export default router;
