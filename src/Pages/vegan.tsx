import React from 'react';
import './vegan.css';
import OrderButtons from '../Components/OrderButtons';
import '../assets/Vegan-Pasta.jpg';
import '../assets/Grilled-Sandwich.jpg';
import '../assets/Vegetable-&-Egg-Stir-Fry.jpg';

const Vegan = () => {
  const recipes = [
    { id: 1, name: 'Vegan Pasta' },
    { id: 2, name: 'Grilled Sandwich' },
    { id: 3, name: 'Vegetable & Egg Stir Fry' },
  ];

  const handleOrder = (recipeName: string) => {
    alert(`You ordered ${recipeName}!`);
  };

  const handlePurchase = (recipeName: string) => {
    alert(`You purchased the recipe for ${recipeName}!`);
  };

  return (
    <div className="vegan">
      <h2>Vegan Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img
              src={`src/assets/${recipe.name.toLowerCase().replace(/ /g, '-')}.jpg`}
              alt={recipe.name}
              className="recipe-image"
            />
            <h3>{recipe.name}</h3>
            <OrderButtons
              onOrder={() => handleOrder(recipe.name)}
              onPurchase={() => handlePurchase(recipe.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vegan;
