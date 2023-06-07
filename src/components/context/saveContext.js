/* eslint-disable prettier/prettier */
import React, { createContext, useState } from 'react';

const SavedRecipesContext = createContext();

const SavedRecipesProvider = ({ children }) => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  const saveRecipe = (recipe) => {
    // Kaydedilen tarifleri güncelleyin
    setSavedRecipes((prevRecipes) => [...prevRecipes, recipe]);
  };

  const unsaveRecipe = (recipe) => {
    // Kaydedilen tarifi kaldırın
    setSavedRecipes((prevRecipes) =>
      prevRecipes.filter((savedRecipe) => savedRecipe.id !== recipe.id)
    );
  };

  return (
    <SavedRecipesContext.Provider
      value={{ savedRecipes, saveRecipe, unsaveRecipe }}
    >
      {children}
    </SavedRecipesContext.Provider>
  );
};

export { SavedRecipesContext, SavedRecipesProvider };
