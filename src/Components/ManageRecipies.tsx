import React, { useState } from "react";
import "./manageRecipes.css"; // You can style this component using this CSS file.

interface Recipe {
  id: number;
  name: string;
  description: string;
}

const ManageRecipes: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([
    // Example recipes; replace with actual data fetching logic
    { id: 1, name: "Spaghetti Bolognese", description: "A classic Italian dish." },
    { id: 2, name: "Chicken Curry", description: "A spicy chicken curry with rice." },
  ]);

  const [newRecipe, setNewRecipe] = useState({ name: "", description: "" });

  // Add a new recipe
  const addRecipe = () => {
    const newId = recipes.length + 1;
    const updatedRecipes = [...recipes, { ...newRecipe, id: newId }];
    setRecipes(updatedRecipes);
    setNewRecipe({ name: "", description: "" });
  };

  // Remove a recipe by id
  const removeRecipe = (id: number) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="manage-recipes">
      <h1>Manage Recipes</h1>
      
      <div className="recipe-list">
        <h2>Recipes List</h2>
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id} className="recipe-item">
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
              <button onClick={() => removeRecipe(recipe.id)} className="delete-btn">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="add-recipe-form">
        <h2>Add New Recipe</h2>
        <input
          type="text"
          value={newRecipe.name}
          onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })}
          placeholder="Recipe Name"
        />
        <textarea
          value={newRecipe.description}
          onChange={(e) => setNewRecipe({ ...newRecipe, description: e.target.value })}
          placeholder="Recipe Description"
        ></textarea>
        <button onClick={addRecipe} className="add-btn">
          Add Recipe
        </button>
      </div>
    </div>
  );
};

export default ManageRecipes;

