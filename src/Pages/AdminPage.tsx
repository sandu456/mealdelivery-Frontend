import React from 'react';
import { Link } from 'react-router-dom';
import './admin.css';

const AdminPage: React.FC = () => {
  return (
    <div className="admin-page">
      <h1>Welcome!</h1>
      <p>Manage recipes, orders, and users here.</p>
      
      <div className="options-container">
        <div className="option">
          <h2>Manage Recipes</h2>
          <p>Add, edit, or remove recipes from the catalog.</p>
          <Link to="/manage-recipes" className="option-link">
            Manage Recipes
          </Link>
        </div>
        <div className="option">
          <h2>View Orders</h2>
          <p>Track and manage customer orders.</p>
          <Link to="/view-orders" className="option-link">
            View Orders
          </Link>
        </div>
        <div className="option">
          <h2>Manage Users</h2>
          <p>View and manage customer accounts.</p>
          <Link to="/manage-users" className="option-link">
            Manage Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

