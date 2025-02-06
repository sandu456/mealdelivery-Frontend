import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Vegan from './Pages/vegan';
import Vegetarian from './Pages/vegetarian';
import Pescatarian from './Pages/pescatarian';

import OrderButtons from './Components/OrderButtons';

import AdminPage from './Pages/AdminPage';
import CustomerPage from './Pages/CustomerPage';
import OrderMeal from './Components/OrderMeal';
import PurchaseRecipe from './Components/PurchaseRecipe';
import ViewRecipies from './Components/ViewRecipies';
import OrderButtons from './Components/OrderButtons';
import ManageRecipes from "./Components/ManageRecipies";
import ViewOrders from "./Components/ViewOrders";
import ManageUsers from "./Components/ManageUsers";


const App: React.FC = () => {
  return (
    <Router>
      <nav className="navbar">
        <h1>Meal Delivery</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/customer">Customer</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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
                <div className="login-signup">
                  <Link to="/login" className="button login-button">
                    Log In
                  </Link>
                  <Link to="/signup" className="button signup-button">
                    Sign Up
                  </Link>
                </div>
                {/* <div className="meal-categories">
                  <div className="category">
                    <h2>Vegan</h2>
                    <p>Discover our delicious vegan recipes.</p>
                    <Link to="/vegan" className="category-link">
                      Explore Vegan
                    </Link>
                  </div>
                  <div className="category">
                    <h2>Vegetarian</h2>
                    <p>Taste our wide variety of vegetarian meals.</p>
                    <Link to="/vegetarian" className="category-link">
                      Explore Vegetarian
                    </Link>
                  </div>
                  <div className="category">
                    <h2>Pescatarian</h2>
                    <p>Enjoy fresh pescatarian dishes.</p>
                    <Link to="/pescatarian" className="category-link">
                      Explore Pescatarian
                    </Link>
                  </div>
                </div> */}
              </div>
            }
          />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />


          <Route path="/Order-Button" element={<OrderButtons />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order-meal" element={<OrderMeal />} />
          <Route path="/recipies" element={<ViewRecipies />} />
          <Route path="/purchase-recipe" element={<PurchaseRecipe />} />
          <Route path="/vegan" element={<Vegan />} />
          <Route path="/vegetarian" element={<Vegetarian />} />
          <Route path="/pescatarian" element={<Pescatarian />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/manage-recipies" element={<ManageRecipes />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/view-orders" element={<ViewOrders />} />
        </Routes>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Meal Delivery and Recipe Sharing. All rights reserved.</p>
      </footer>
    </Router>
  );
};

export default App;
