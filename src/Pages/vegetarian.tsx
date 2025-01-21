import './vegetarian.css';

const Vegetarian = () => {
  const recipes = [
    {
      id: 1,
      name: "Vegetarian Pasta",
      image: "src/assets/vegetarian-pasta.jpg", // Update with the correct path or URL
    },
    {
      id: 2,
      name: "Grilled Veggie Sandwich",
      image: "src/assets/grilled-veggie-sandwich.jpg", // Update with the correct path or URL
    },
    {
      id: 3,
      name: "Vegetable Fry",
      image: "src/assets/vegetable-fry.jpg", // Update with the correct path or URL
    },
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

export default Vegetarian;
