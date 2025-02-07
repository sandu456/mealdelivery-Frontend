import React from 'react';
import './vegan.css'; // Ensure this CSS file exists and is properly styled
import OrderButtons from '../Components/OrderButtons'; // Ensure OrderButtons component exists

const Vegan = () => {
  // List of vegan recipes
  const veganRecipes = [
    { id: 1, name: 'Vegan Pasta' },
    { id: 2, name: 'Vegan Salad' },
    { id: 3, name: 'Tofu Stir-fry' },
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
        {veganRecipes.map((recipe) => (
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

export default Vegan;
