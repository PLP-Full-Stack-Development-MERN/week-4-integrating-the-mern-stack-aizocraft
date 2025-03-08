const express = require("express");
const router = express.Router();
const { createTask, getTasks, updateTask, deleteTask } = require("../controllers/taskController");
const auth = require("../middleware/auth"); 

// Protect all routes with the auth middleware
router.post("/", auth, createTask); // Only authenticated users can create tasks
router.get("/", auth, getTasks); // Only authenticated users can fetch tasks
router.put("/:id", auth, updateTask); // Only authenticated users can update tasks
router.delete("/:id", auth, deleteTask); // Only authenticated users can delete tasks

module.exports = router;