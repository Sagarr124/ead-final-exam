import { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";

export const useRecipesContext = () => {
  const context = useContext(RecipesContext)

  if(!context) {
    throw Error('useRecipesContext must be used inside a RecipesContextProvider')
  }

  return context
}