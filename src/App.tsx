import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import OrderMeal from './Pages/OrderMeal';
import PurchaseRecipe from './Pages/PurchaseRecipe';
import Vegan from './Pages/Vegan';
import Vegetarian from './Pages/Vegetarian';
import Pescatarian from './Pages/Pescatarian';

const App: React.FC = () => {
  return (
    <Router>
      <nav className="navbar">
      <h1>Meal Delivery </h1>
     
      <ul>
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>

      <ul>
        <li><a href="/About-Us">About Us</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
    </nav>
    
      <div className="app">
        <Routes>
         
          <Route
            path="/"
            element={
              <div>
                <h1>Welcome to Meal Delivery</h1>
                <p>Explore our meal options below:</p>
                <div className="meal-categories">
                  <div className="category">
                    <h2>Vegan</h2>
                    <p>Discover our delicious vegan recipes.</p>
                    <a href="/vegan" className="category-link">
                      Explore Vegan
                    </a>
                  </div>
                  <div className="category">
                    <h2>Vegetarian</h2>
                    <p>Taste our wide variety of vegetarian meals.</p>
                    <a href="/vegetarian" className="category-link">
                      Explore Vegetarian
                    </a>
                  </div>
                  <div className="category">
                    <h2>Pescatarian</h2>
                    <p>Enjoy fresh pescatarian dishes.</p>
                    <a href="/pescatarian" className="category-link">
                      Explore Pescatarian
                    </a>
                  </div>
                </div>
                <div className="order-options">
                  <div className="option">
                    <h2>Order Meals</h2>
                    <p>Choose your favorite meals and have them delivered.</p>
                    <Link to="/order-meal" className="option-link">
                      Order Meals
                    </Link>
                  </div>
                  <div className="option">
                    <h2>Purchase Recipes</h2>
                    <p>Get our exclusive recipes delivered to your email.</p>
                    <Link to="/purchase-recipe" className="option-link">
                      Purchase Recipes
                    </Link>
                  </div>
                </div>
              </div>
            }
          />

          {/* Log In and Sign Up Pages */}
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* About Us and Contact Pages */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      
    </Router>
   
    
  );
};

export default App;
