import './vegan.css';

const Vegan = () => {
  const recipes = [
    {
      id: 1,
      name: "Vegan Pasta",
      image: "src/assets/vegan-pasta.jpg", // Update with the correct path or URL
    },
    {
      id: 2,
      name: "Grilled Sandwich",
      image: "src/assets/grilled-sandwich.jpg", // Update with the correct path or URL
    },
    {
      id: 3,
      name: "Vegetable & Egg Stir Fry",
      image: "src/assets/vegetable-stir-fry.jpg", // Update with the correct path or URL
    },
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
              src={recipe.image}
              alt={recipe.name}
              className="recipe-image"
            />
            <h3>{recipe.name}</h3>
            <div className="button-group">
              <button
                className="order-button"
                onClick={() => handleOrder(recipe.name)}
              >
                Order Now
              </button>
              <button
                className="purchase-button"
                onClick={() => handlePurchase(recipe.name)}
              >
                Purchase Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vegan;
