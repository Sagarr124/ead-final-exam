import { useState } from "react";
import { useRecipesContext } from "../hooks/useRecipesContext";

const RecipeForm = () => {
  const { dispatch } = useRecipesContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recipe = { title, description, ingredients, instructions, image };

    const response = await fetch("http://localhost:3001/recipes", {
      method: "POST",
      body: JSON.stringify(recipe),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
      setEmptyFields(data.emptyFields);
    }
    if (response.ok) {
      setEmptyFields([]);
      setError(null);
      setTitle("");
      setDescription("");
      setIngredients([]);
      setInstructions("");
      setImage("");
      dispatch({ type: "CREATE_RECIPE", payload: data });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Recipe</h3>

      <label>Recipe Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Description:</label>
      <textarea
        cols="30"
        rows="5 "
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className={emptyFields.includes("description") ? "error" : ""}
      ></textarea>

      <label>Ingredients:</label>
      <input
        type="text"
        onChange={(e) => setIngredients(e.target.value)}
        value={ingredients}
        className={emptyFields.includes("ingredients") ? "error" : ""}
      />

      <label>Instructions:</label>
      <textarea
        cols="30"
        rows="5"
        onChange={(e) => setInstructions(e.target.value)}
        value={instructions}
        className={emptyFields.includes("instructions") ? "error" : ""}
      ></textarea>

      <label>Upload Image:</label>
      <input
        type="file"
        onChange={(e) => setImage(e.target.value)}
        value={image}
        className={emptyFields.includes("image") ? "error" : ""}
      />

      <button>Add Recipe</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default RecipeForm;
