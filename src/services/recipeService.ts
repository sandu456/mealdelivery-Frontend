import axios from "axios";

const API_URL = "http://localhost:8080/recipes";


const getAuthHeaders = () => {
  const token = localStorage.getItem("token"); 
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data", 
    },
  };
};

// ✅ Upload Recipe Card (Admin Only)
export const uploadRecipe = async (mealId: string, file: File) => {
  try {
    const formData = new FormData();
    formData.append("mealId", mealId);
    formData.append("file", file);

    const response = await axios.post(`${API_URL}/upload`, formData, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("Error uploading recipe:", error);
    throw error;
  }
};

// ✅ Get Recipe Card (For Meal Buyers)
export const getRecipe = async (mealId: string, customerId: string) => {
  try {
    const response = await axios.get(`${API_URL}/${mealId}?customerId=${customerId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      responseType: "blob", 
    });

    return response.data; 
  } catch (error) {
    console.error("Error fetching recipe:", error);
    throw error;
  }
};
