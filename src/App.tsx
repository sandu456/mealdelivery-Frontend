import React from 'react';
import { Link, BrowserRouter as Router, Routes, Route ,useLocation} from 'react-router-dom';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Vegan from './Pages/vegan';
import Vegetarian from './Pages/vegetarian';
import Pescatarian from './Pages/pescatarian';
import AdminPage from './Pages/AdminPage';
import Order from './Pages/Order';
import OrderMeal from './Components/OrderMeal';
import PurchaseRecipe from './Components/PurchaseRecipe';
import ViewRecipies from './Components/ViewRecipies';
import OrderButtons from './Components/OrderButtons';
import ManageRecipes from "./Components/ManageRecipies";
import ViewOrders from "./Components/ViewOrders";
import ManageUsers from "./Components/ManageUsers";
import backgroundImage from "./assets/background.jpg";
import logo from './assets/logo.jpg';


const App: React.FC = () => {
  return (
    <Router>
      <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <nav className="navbar">
      <div className="logo-title">
      <img src={logo} alt="Cook Book Logo" className="logo" />
        <h1>COOK BOOK</h1></div>
          <Link to="/" className="home">Home</Link>
          <Link to="/admin" className="admin">Admin</Link>
          <Link to="/order" className="order">Order</Link>
          <Link to="/about-us" className="about-us">About Us</Link>
          <Link to="/contact" className="contact">Contact</Link>
      </nav>

      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Welcome to Meal Delivery</h1>
                <p>Homestyle meals, anytime</p>
                <div className="login-signup">
                  <Link to="/login" className="button login-button">Log In</Link>
                  <Link to="/signup" className="button signup-button">Sign Up</Link>
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
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order-meal" element={<OrderMeal />} />
          <Route path="/recipies" element={<ViewRecipies />} />
          <Route path="/purchase-recipe" element={<PurchaseRecipe />} />
          <Route path="/vegan" element={<Vegan />} />
          <Route path="/vegetarian" element={<Vegetarian />} />
          <Route path="/pescatarian" element={<Pescatarian />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/order" element={<Order />} />
          <Route path="/manage-recipies" element={<ManageRecipes />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/view-orders" element={<ViewOrders />} />
        </Routes>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Meal Delivery and Recipe Sharing. All rights reserved.</p>
      </footer>
      </div>
    </Router>
  );
};

export default App;
