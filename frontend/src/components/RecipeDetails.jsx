import { useRecipesContext } from "../hooks/useRecipesContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
// import { DeleteOutlined } from "@mui/icons-material";

const RecipeDetails = ({ recipe }) => {
  const { dispatch } = useRecipesContext();

  const handleClick = async () => {
    const response = await fetch(
      `http://localhost:3001/recipes/${recipe._id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_RECIPE", payload: data });
    }
  };

  return (
    <div className="recipe-details">
      <h4>{recipe.title}</h4>
      <p>
        <strong>Description: </strong>
        {recipe.description}
      </p>
      <p>
        <strong>Ingredients: </strong>
        {recipe.ingredients}
      </p>
      <p>
        <strong>Instuctions: </strong>
        {recipe.instructions}
      </p>
      <p>
        {formatDistanceToNow(new Date(recipe.createdAt), { addSuffix: true })}
      </p>

      <span onClick={handleClick}>{/* <DeleteOutlined /> */}</span>
    </div>
  );
};

export default RecipeDetails;
