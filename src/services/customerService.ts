import axios from "axios";

const API_URL = "http://localhost:8080/customers"; // Update this if your backend URL is different

// Set authentication token (Modify based on your authentication mechanism)
const getAuthHeaders = () => {
  const token = localStorage.getItem("token"); // Adjust based on how you store the token
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
};

// Fetch all customers (Only ADMIN can do this)
export const getCustomers = async () => {
  try {
    const response = await axios.get(API_URL, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
};

// Fetch a customer by ID (Only ADMIN can do this)
export const getCustomerById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/get/${id}`, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error(`Error fetching customer with ID ${id}:`, error);
    throw error;
  }
};

// Create a new customer (Accessible to all)
export const createCustomer = async (customer: {
  name: string;
  email: string;
  phone: string;
  address: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/create`, customer, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("Error creating customer:", error);
    throw error;
  }
};

// Update a customer by ID
export const updateCustomer = async (id: string, customer: {
  name: string;
  email: string;
  phone: string;
  address: string;
}) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, customer, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error(`Error updating customer with ID ${id}:`, error);
    throw error;
  }
};

// Delete a customer by ID (Only ADMIN can do this)
export const deleteCustomer = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error(`Error deleting customer with ID ${id}:`, error);
    throw error;
  }
};
