import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Recipe interface to type the recipe data structure
interface Recipe {
  id: number;
  name: string;
  description: string;
  price: number;
}

const ManageRecipes: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch recipes from your backend
  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/recipes"); // Your API to fetch recipes
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch the recipes when the component mounts
  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleDelete = async (recipeId: number) => {
    try {
      await axios.delete(`/api/recipes/${recipeId}`); // Your API endpoint to delete a recipe
      setRecipes(recipes.filter((recipe) => recipe.id !== recipeId)); // Update the state
    } catch (error) {
      console.error("Error deleting recipe", error);
    }
  };

  return (
    <div className="manage-recipes">
      <h2>Manage Recipes</h2>
      <p>Here you can add, edit, or delete recipes from the catalog.</p>

      <div>
        <Link to="/admin/add-recipe" className="button">
          Add New Recipe
        </Link>
      </div>

      {loading ? (
        <p>Loading recipes...</p>
      ) : (
        <table className="recipes-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe) => (
              <tr key={recipe.id}>
                <td>{recipe.name}</td>
                <td>{recipe.description}</td>
                <td>${recipe.price.toFixed(2)}</td>
                <td>
                  <Link to={`/admin/edit-recipe/${recipe.id}`} className="button">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(recipe.id)}
                    className="button delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageRecipes;

