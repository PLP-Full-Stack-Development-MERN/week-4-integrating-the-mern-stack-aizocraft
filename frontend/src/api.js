import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Create an Axios instance with default headers
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the JWT token in headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-auth-token"] = token; // Add the token to the headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Task-related API calls
export const fetchTasks = () => api.get("/tasks");
export const createTask = (taskData) => api.post("/tasks", taskData);
export const updateTask = (id, updatedData) => api.put(`/tasks/${id}`, updatedData);
export const deleteTask = (id) => api.delete(`/tasks/${id}`);

// Auth-related API calls
export const registerUser = (userData) => api.post("/auth/register", userData);
export const loginUser = (userData) => api.post("/auth/login", userData);

// Helper function to check if the user is authenticated
export const checkAuth = () => {
  const token = localStorage.getItem("token");
  return token ? true : false;
};