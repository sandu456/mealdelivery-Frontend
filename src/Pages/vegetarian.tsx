import './Vegetarian.css';

const Vegetarian = () => {
  const recipes = [
    { id: 1, name: "Vegetarian Pasta" },
    { id: 2, name: "Grilled Veggie Sandwich" },
    { id: 3, name: "Vegetable Fry" },
  ];

  return (
    <div className="vegetarian">
      <h2>Vegetarian Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Vegetarian;