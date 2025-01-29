import React, { useState } from "react";
import "./manageUsers.css"; // You can style this component using this CSS file.

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const ManageUsers: React.FC = () => {
  // Example users; replace with actual data fetching logic
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Customer" },
  ]);

  const [newUser, setNewUser] = useState({ name: "", email: "", role: "Customer" });

  // Add a new user
  const addUser = () => {
    const newId = users.length + 1;
    const updatedUsers = [...users, { ...newUser, id: newId }];
    setUsers(updatedUsers);
    setNewUser({ name: "", email: "", role: "Customer" });
  };

  // Remove a user by id
  const removeUser = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  // Update user role
  const updateUserRole = (id: number, role: string) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, role } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="manage-users">
      <h1>Manage Users</h1>

      <div className="users-list">
        <h2>User Accounts</h2>
        <table className="users-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    onClick={() => updateUserRole(user.id, user.role === "Admin" ? "Customer" : "Admin")}
                    className="role-btn"
                  >
                    Make {user.role === "Admin" ? "Customer" : "Admin"}
                  </button>
                  <button
                    onClick={() => removeUser(user.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="add-user-form">
        <h2>Add New User</h2>
        <input
          type="text"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          placeholder="Email"
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option value="Customer">Customer</option>
          <option value="Admin">Admin</option>
        </select>
        <button onClick={addUser} className="add-btn">
          Add User
        </button>
      </div>
    </div>
  );
};

export default ManageUsers;
