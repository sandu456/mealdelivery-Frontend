import React from 'react';
import './pescatarian.css';
import OrderButtons from '../Components/OrderButtons';

const Pescatarian = () => {
  const recipes = [
    { id: 1, name: 'Pasta' },
    { id: 2, name: 'Sandwich' },
    { id: 3, name: 'Chicken Fry' },
  ];

  const handleOrder = (recipeName: string) => {
    alert(`You ordered ${recipeName}!`);
  };

  const handlePurchase = (recipeName: string) => {
    alert(`You purchased the recipe for ${recipeName}!`);
  };

  return (
    <div className="pescatarian">
      <h2>Pescatarian Recipes</h2>
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

export default Pescatarian;
