import axios from "axios";

const API_URL = "http://localhost:8080/reviews"; // Update this if your backend URL is different

// Set authentication headers (for protected routes)
const getAuthHeaders = () => {
  const token = localStorage.getItem("token"); // Adjust based on your authentication mechanism
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
};

// Add a new review (Only CUSTOMERS can do this)
export const addReview = async (review: {
  customerId: string;
  mealId: string;
  comment: string;
  rating: number;
}) => {
  try {
    const response = await axios.post(`${API_URL}/create`, review, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("Error adding review:", error);
    throw error;
  }
};

// Get a review by its ID
export const getReviewById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching review with ID ${id}:`, error);
    throw error;
  }
};

// Get all reviews for a specific meal
export const getReviewsByMealId = async (mealId: string) => {
  try {
    const response = await axios.get(`${API_URL}/${mealId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching reviews for meal ID ${mealId}:`, error);
    throw error;
  }
};

// Get all reviews
export const getAllReviews = async () => {
  try {
    const response = await axios.get(`${API_URL}/get`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all reviews:", error);
    throw error;
  }
};

// Update a review (Only CUSTOMERS can do this)
export const updateReview = async (id: string, review: {
  comment: string;
  rating: number;
}) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, review, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error(`Error updating review with ID ${id}:`, error);
    throw error;
  }
};

// Delete a review (Only CUSTOMERS can do this)
export const deleteReview = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error(`Error deleting review with ID ${id}:`, error);
    throw error;
  }
};
