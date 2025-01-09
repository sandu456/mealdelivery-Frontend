import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to Meal Delivery</h1>
      <p>Explore our meal options below:</p>

      <div className="meal-categories">
        <div className="category">
          <h2>Vegan</h2>
          <p>Discover our delicious vegan recipes.</p>
          <a href="/vegan" className="category-link">Explore Vegan</a>
        </div>
        <div className="category">
          <h2>Vegetarian</h2>
          <p>Taste our wide variety of vegetarian meals.</p>
          <a href="/vegetarian" className="category-link">Explore Vegetarian</a>
        </div>
        <div className="category">
          <h2>Pescatarian</h2>
          <p>Enjoy fresh pescatarian dishes.</p>
          <a href="/pescatarian" className="category-link">Explore Pescatarian</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
