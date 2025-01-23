import React from 'react';
import './vegetarian.css';
import OrderButtons from '../Components/OrderButtons';

const Vegetarian = () => {
  const recipes = [
    { id: 1, name: 'Vegetarian Pasta' },
    { id: 2, name: 'Grilled Veggie Sandwich' },
    { id: 3, name: 'Vegetable Fry' },
  ];

  const handleOrder = (recipeName: string) => {
    alert(`You ordered ${recipeName}!`);
  };

  const handlePurchase = (recipeName: string) => {
    alert(`You purchased the recipe for ${recipeName}!`);
  };

  return (
    <div className="vegetarian">
      <h2>Vegetarian Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img
              src={`src/assets/${recipe.name.toLowerCase().replace(/ /g, '-')}.jpg`}
              alt={recipe.name}
              className="recipe-image"
            />
            <h3>{recipe.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vegetarian;
