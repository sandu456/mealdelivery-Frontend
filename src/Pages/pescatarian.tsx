import React from 'react';
import './pescatarian.css';
import OrderButtons from '../Components/OrderButtons'; 

const Pescatarian = () => {
  
  const recipes = [
    { id: 1, name: 'Pasta' },
    { id: 2, name: 'Sandwich' },
    { id: 3, name: 'Grilled Salmon' }, 
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
    <div className="pescatarian">
      <h2>Pescatarian Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.name}</h3>
            
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

export default Pescatarian;
