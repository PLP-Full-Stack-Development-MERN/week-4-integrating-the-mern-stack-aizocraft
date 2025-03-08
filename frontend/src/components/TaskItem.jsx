import { useState } from "react";
import { updateTask, deleteTask } from "../api"; // Import the API functions
import "../styles.css"; // Ensure styles are applied

const TaskItem = ({ task, fetchTasks }) => {
  const [status, setStatus] = useState(task.status);

  // Handle task deletion
  const handleDelete = async () => {
    try {
      await deleteTask(task._id); // Use the deleteTask function from api.js
      fetchTasks(); // Re-fetch tasks after deleting
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Handle status toggle
  const toggleStatus = async () => {
    const newStatus = status === "pending" ? "completed" : "pending"; // Toggle between pending and completed
    try {
      const response = await updateTask(task._id, { status: newStatus }); // Use the updateTask function from api.js
      console.log("Status update response:", response.data); // Log the response from the backend
      if (response.data) {
        setStatus(newStatus); // Update the local status state
        fetchTasks(); // Re-fetch tasks after status change
      }
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {status}</p>
      <p>Due Date: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "No due date"}</p>
      
      <label className="switch">
        <input
          type="checkbox"
          checked={status === "completed"}  // The checkbox is checked if status is 'completed'
          onChange={toggleStatus}  // Trigger status change when clicked
        />
        <span className="slider round"></span>
      </label>
      
      <button className="delete-btn" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;