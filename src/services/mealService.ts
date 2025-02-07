import axios from "axios";

const API_URL = "http://localhost:8080/meals"; // Update this if your backend URL is different

// Set authentication token (Modify this based on your authentication mechanism)
const getAuthHeaders = () => {
  const token = localStorage.getItem("token"); // Adjust based on how you store the token
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
};

// Fetch all meals (Accessible by ADMIN and CUSTOMER)
export const getMeals = async () => {
  try {
    const response = await axios.get(`${API_URL}/get`, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("Error fetching meals:", error);
    throw error;
  }
};

// Fetch a meal by ID (Accessible by ADMIN and CUSTOMER)
export const getMealById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error(`Error fetching meal with ID ${id}:`, error);
    throw error;
  }
};

// Add a new meal (Only ADMIN can do this)
export const addMeal = async (meal: {
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
}) => {
  try {
    const response = await axios.post(`${API_URL}/save`, meal, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("Error adding meal:", error);
    throw error;
  }
};

// Update a meal by ID (Only ADMIN can do this)
export const updateMeal = async (id: string, meal: {
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
}) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, meal, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error(`Error updating meal with ID ${id}:`, error);
    throw error;
  }
};

// Delete a meal by ID (Only ADMIN can do this)
export const deleteMeal = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error(`Error deleting meal with ID ${id}:`, error);
    throw error;
  }
};

// Get only available meals (For customers)
export const getAvailableMeals = async () => {
  try {
    const response = await axios.get(`${API_URL}/available`);
    return response.data;
  } catch (error) {
    console.error("Error fetching available meals:", error);
    throw error;
  }
};
