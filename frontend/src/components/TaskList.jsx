import { useState, useEffect } from "react";
import { fetchTasks } from "../api";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasksData = async () => {
    try {
      const response = await fetchTasks(); // Use the fetchTasks function from api.js
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasksData();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? <p>No tasks available.</p> : tasks.map(task => (
        <TaskItem key={task._id} task={task} fetchTasks={fetchTasksData} />
      ))}
    </div>
  );
};

export default TaskList;