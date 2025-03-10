import React from 'react';
import './vegan.css'; 
import OrderButtons from '../Components/OrderButtons'; 

const Vegan = () => {
  // List of vegan recipes
  const veganRecipes = [
    { id: 1, name: 'Vegan Pasta' },
    { id: 2, name: 'Vegan Salad' },
    { id: 3, name: 'Tofu Stir-fry' },
  ];

const handleOrder = (recipeName: string) => {
  alert(`You can order ${recipeName}!`);
};


const handlePurchase = (recipeName: string) => {
  alert(`You can purchase the recipe for ${recipeName}!`);
};


const handleReview = (recipeName: string) => {
  alert(`You can now leave a review for ${recipeName}.`);
};
 
  return (
    <div className="vegan">
      <h2>Vegan Recipes</h2>
      <div className="recipe-list">
        {veganRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.name}</h3>
            {/* Ensure the OrderButtons component is passed the correct handler */}
            <OrderButtons 
              onOrder={() => handleOrder(recipe.name)} 
              onPurchase={() => handlePurchase(recipe.name)} 
              onReview={() => handleReview(recipe.name)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vegan;
