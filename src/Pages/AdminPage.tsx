import React from 'react';
import './admin.css';

const AdminPage = () => {
  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <p>Welcome to the Admin Page! Manage recipes, orders, and customers here.</p>
      <button>Manage Recipes</button>
      <button>View Orders</button>
      <button>Manage Customers</button>
    </div>
  );
};

export default AdminPage;
