
import "./manageUsers.css"; // You can style this component using this CSS file.
import React, { useEffect, useState } from "react";

interface Customer {
  id: string;
  name: string;
  email: string;
  password:string;
  }

  const ManageUsers: React.FC = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [newCustomer, setNewCustomer] = useState({ name: "", email: "", password: "" });
  
    // Fetch customers from the backend
    useEffect(() => {
      const fetchCustomers = async () => {
        try {
          const response = await fetch("http://localhost:8080/customers", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // If using JWT authentication
            },
          });
          if (!response.ok) throw new Error("Failed to fetch customers");
          const data = await response.json();
          setCustomers(data);
        } catch (error) {
          console.error("Error fetching customers:", error);
        }
      };
  
      fetchCustomers();
    }, []);
  
    // Add a new customer
    const addCustomer = async () => {
      try {
        const response = await fetch("http://localhost:8080/customers/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCustomer),
        });
  
        if (!response.ok) {
          alert("Failed to add customer.");
          return;
        }
  
        alert("Customer added successfully!");
        setNewCustomer({ name: "", email: "",password:"" });
  
        // Refresh customers list
        const updatedResponse = await fetch("http://localhost:8080/customers");
        const updatedData = await updatedResponse.json();
        setCustomers(updatedData);
      } catch (error) {
        console.error("Error adding customer:", error);
      }
    };
  
    // Delete a customer
    const deleteCustomer = async (id: string) => {
      try {
        const response = await fetch(`http://localhost:8080/customers/${id}`, {
          method: "DELETE",
        });
  
        if (!response.ok) {
          alert("Failed to delete customer.");
          return;
        }
  
        alert("Customer deleted successfully!");
        setCustomers(customers.filter((customer) => customer.id !== id));
      } catch (error) {
        console.error("Error deleting customer:", error);
      }
    };
  return (
    <div className="manage-users">
      <h1>Manage Customers</h1>

      <div className="users-list">
        <h2>Customer Accounts</h2>
        <table className="users-table">
          <thead>
            <tr>
              <th>Customer Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.password}</td>
                <td>
          
                  <button
                    onClick={() => deleteCustomer(customer.id)}
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
          value={newCustomer.name}
          onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="email"
          value={newCustomer.email}
          onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
          placeholder="Email"
        />
        <input
            type="password"
            value={newCustomer.password}
            onChange={(e) => setNewCustomer({ ...newCustomer, password: e.target.value })}
            placeholder="password"
          />
       
        
        <button onClick={addCustomer} className="add-btn">
          Add Customer
        </button>
      </div>
    </div>
  );
};

export default ManageUsers;
