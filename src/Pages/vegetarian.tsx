import React from 'react';
import './vegetarian.css'; // Ensure this CSS file exists and is properly styled
import OrderButtons from '../Components/OrderButtons'; // Ensure OrderButtons component exists

const Vegetarian = () => {
  // List of vegetarian recipes
  const vegetarianRecipes = [
    { id: 1, name: 'Vegetarian Burger' },
    { id: 2, name: 'Vegetable Stir-fry' },
    { id: 3, name: 'Spinach Pasta' },
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
        {vegetarianRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.name}</h3>
            {/* <OrderButtons 
              onOrder={() => handleOrder(recipe.name)} 
              onPurchase={() => handlePurchase(recipe.name)} 
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vegetarian;
