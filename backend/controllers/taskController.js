const Task = require("../models/Task");

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const { title, description, status, dueDate } = req.body;

    // Create a new task associated with the authenticated user
    const task = new Task({
      title,
      description,
      status,
      dueDate,
      user: req.user.id, // Associate the task with the authenticated user
    });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all tasks for the authenticated user
exports.getTasks = async (req, res) => {
  try {
    // Fetch tasks associated with the authenticated user
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update the status of a task (only for the authenticated user)
exports.updateTask = async (req, res) => {
  try {
    const { status } = req.body;

    // Find the task by ID and ensure it belongs to the authenticated user
    let task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Check if the task belongs to the authenticated user
    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    // Update the task status
    task = await Task.findByIdAndUpdate(
      req.params.id,
      { status }, // Only update the status
      { new: true } // Return the updated task
    );

    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a task (only for the authenticated user)
exports.deleteTask = async (req, res) => {
  try {
    // Find the task by ID and ensure it belongs to the authenticated user
    let task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Check if the task belongs to the authenticated user
    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    // Delete the task
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};