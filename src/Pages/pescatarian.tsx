import './pescatarian.css';

const Pescatarian = () => {
  const recipes = [
    {
      id: 1,
      name: "Pasta",
      image: "src/assets/pescatarian-pasta.jpg", // Replace with the actual image path
    },
    {
      id: 2,
      name: "Sandwich",
      image: "src/assets/pescatarian-sandwich.jpg", // Replace with the actual image path
    },
    {
      id: 3,
      name: "Chicken Fry",
      image: "src/assets/chicken-fry.jpg", // Replace with the actual image path
    },
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

export default Pescatarian;
