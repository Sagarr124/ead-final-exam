import { useEffect } from "react";
import { useRecipesContext } from "../hooks/useRecipesContext";
import RecipeDetails from "../components/RecipeDetails";
import RecipeForm from "../components/RecipeForm";

const Home = () => {
  const { recipes, dispatch } = useRecipesContext();

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('http://localhost:3001/recipes', {
        method: "GET",
      });
      const data = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_RECIPES', payload: data})
      }
    };

    fetchRecipes();
  }, [dispatch])

  return (
    <div className="home">
      <div className="recipes">
        {recipes && recipes.map(recipe => (
          <RecipeDetails recipe={recipe} key={recipe._id} />
        ))}
      </div>
      <RecipeForm />
    </div>
  )
};

export default Home;