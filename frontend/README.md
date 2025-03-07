Task Manager Frontend (React + Vite)
Overview

This is the frontend of the Task Manager application built with React and Vite. It provides an interface to manage tasks, allowing users to add, view, and delete tasks. The frontend interacts with the backend API through Axios to perform CRUD operations.
Project Structure

/frontend
│── /public                # Static files like index.html
│── /src
│   │── /components        # Reusable components (TaskList, TaskItem, TaskForm)
│   │── /pages            # Page components (Home)
│   │── App.jsx            # Main app component
│   │── main.jsx           # Entry point for React
│   │── api.js             # API calls to backend
│   │── styles.css         # Global CSS
│── vite.config.js         # Vite configuration
│── package.json           # Frontend dependencies

Setup Instructions

    Install Dependencies:

npm install

Run Development Server:

    npm run dev

    Access the App: Open your browser and navigate to http://localhost:3000.

Key Components

    TaskList: Displays all tasks fetched from the backend.
    TaskForm: Allows users to add new tasks or update existing ones.
    TaskItem: Represents an individual task with delete functionality.

API Integration

The frontend communicates with the backend through Axios to perform CRUD operations:

    POST /api/tasks: Create a new task.
    GET /api/tasks: Fetch all tasks.
    DELETE /api/tasks/:id: Delete a task.