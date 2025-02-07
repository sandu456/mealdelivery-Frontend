import React from 'react';
import './pescatarian.css';
import OrderButtons from '../Components/OrderButtons'; // Ensure you have this component

const Pescatarian = () => {
  // List of recipes for pescatarian meals
  const recipes = [
    { id: 1, name: 'Pasta' },
    { id: 2, name: 'Sandwich' },
    { id: 3, name: 'Grilled Salmon' }, // Updated dish name for pescatarian
  ];

  // Handler for when the user orders a recipe
  const handleOrder = (recipeName: string) => {
    alert(`You ordered ${recipeName}!`);
  };

  // Handler for when the user purchases the recipe
  const handlePurchase = (recipeName: string) => {
    alert(`You purchased the recipe for ${recipeName}!`);
  };

  // Handler for reviewing a recipe
  const handleReview = (recipeName: string) => {
    alert(`You can now leave a review for ${recipeName}.`);
  };

  return (
    <div className="pescatarian">
      <h2>Pescatarian Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.name}</h3>
            {/* Ensure the OrderButtons component is passed the correct handler */}
            <OrderButtons 
              onOrder={() => handleOrder(recipe.name)} 
              onPurchase={() => handlePurchase(recipe.name)} 
              onReview={() => handleReview(recipe.name)} // Add review handler
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pescatarian;
