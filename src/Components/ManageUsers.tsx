import React, { useState, useEffect } from "react";
import customerService, { createCustomer } from "../services/customerService";

import "./manageUsers.css"; // You can style this component using this CSS file.

interface Customer {
  customerId: string; // Assuming customerId is a string from the API, adjust if it's a number.
  name: string;
  email: string;
  password: string; // Assuming password is included as per your model.
}

const ManageCustomers: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Fetch customers on component mount
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await customerService.getCustomers();
        setCustomers(data); // Assuming the API response is an array of customers
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  // Add a new customer
  const handleCreateCustomer = async () => {
    try {
      const createdCustomer = await customerService.createCustomer(newCustomer);
      console.log("Created Customer:", createdCustomer);
      setCustomers([...customers, createdCustomer]); // Add the new customer to the table
      setNewCustomer({ name: "", email: "", password: "" }); // Reset form fields
    } catch (error) {
      console.error("Error creating customer:", error);
    }
  };
  // Remove a customer by ID
  const removeCustomer = async (id: string) => {
    try {
      await customerService.deleteCustomer(id);
      setCustomers(customers.filter((customer) => customer.customerId !== id)); // Remove the customer from the state
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  // Update customer information
  // const updateCustomer = async (id: string, updatedData: { name: string; email: string; password: string }) => {
  //   try {
  //     await customerService.updateCustomer(id, updatedData);
  //     setCustomers(
  //       customers.map((customer) =>
  //         customer.customerId === id ? { ...customer, ...updatedData } : customer
  //       )
  //     ); // Update the customer in the state
  //   } catch (error) {
  //     console.error("Error updating customer:", error);
  //   }
  // };

  return (
    <div className="manage-customers">
      <h1>Manage Customers</h1>

      <div className="customers-list">
        <h2>Customer Accounts</h2>
        <table className="customers-table">
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.customerId}>
                <td>{customer.customerId}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>
                  {/* <button
                    onClick={() => updateCustomer(customer.customerId, { name: customer.name, email: customer.email, password: customer.password })}
                    className="update-btn"
                  >
                    Update
                  </button> */}
                  <button
                    onClick={() => removeCustomer(customer.customerId)}
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

      <div className="add-customer-form">
        <h2>Add New Customer</h2>
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
          placeholder="Password"
        />
        <button onClick={handleCreateCustomer} className="add-btn">
          Add Customer
        </button>
      </div>
    </div>
  );
};

export default ManageCustomers;
