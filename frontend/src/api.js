import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

export const fetchTasks = () => axios.get(API_URL);
export const createTask = (taskData) => axios.post(API_URL, taskData);
export const updateTask = (id, updatedData) => axios.put(`${API_URL}/${id}`, updatedData);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
