import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import "./ViewRecipies.css";

interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string;
  imageUrl: string;
}

const ViewRecipies: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get<Recipe[]>("/api/recipes");
        setRecipes(response.data);
      } catch (err) {
        setError("Failed to load recipes");
      } finally {
        setLoading(false);
      }
    };
    
    fetchRecipes();
  }, []);

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="view-recipes">
      <h2>Recipes</h2>
      <div className="recipes-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.imageUrl} alt={recipe.name} />
            <h3>{recipe.name}</h3>
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
          </div>
        ))}
      </div>
      <div className="meal-categories">
        <div className="category">
          <h2>Vegan</h2>
          <p>Discover our delicious vegan recipes.</p>
          <Link to="/vegan" className="category-link">
            Explore Vegan
          </Link>
        </div>
        <div className="category">
          <h2>Vegetarian</h2>
          <p>Taste our wide variety of vegetarian meals.</p>
          <Link to="/vegetarian" className="category-link">
            Explore Vegetarian
          </Link>
        </div>
        <div className="category">
          <h2>Pescatarian</h2>
          <p>Enjoy fresh pescatarian dishes.</p>
          <Link to="/pescatarian" className="category-link">
            Explore Pescatarian
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewRecipies;