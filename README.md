# 🚀 MERN Stack Task Manager

Welcome to the MERN Stack Task Manager! This is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, read, update, and delete tasks while providing secure user authentication (login and registration). Each task includes fields like title, description, status, and due date.
## ✨ Features

    User Authentication:

        Register a new account.

        Log in to an existing account.

    Task Management:

        Create a new task with a title, description, status, and due date.

        View all tasks in a list.

        Update the status or details of a task.

        Delete a task.

    Responsive Design:

        Works seamlessly on PC, laptop, tablet, and phone.

    Modern UI:

        Clean and intuitive user interface with smooth animations and transitions.

    Secure:

        JWT-based authentication for secure access.

## 🛠️ Technologies Used

    Frontend:

        React (Vite)

        Axios (for API requests)

        React Router (for navigation)

        CSS (for styling)

    Backend:

        Node.js

        Express.js

        MongoDB (for database)

        Mongoose (for MongoDB object modeling)

        JWT (for authentication)

    Tools:

        Postman (for API testing)

        Git (for version control)

## 🚀 Getting Started
1. Clone the Repository

```bash
git clone https://github.com/PLP-Full-Stack-Development-MERN/week-4-integrating-the-mern-stack-aizocraft.git
cd week-4-integrating-the-mern-stack-aizocraft
```

2. Backend Setup

    Navigate to the backend directory:

    ```bash
    cd backend
    ```
    ```bash
    Install dependencies:
   
    npm install
    ```

    Create a .env file in the backend directory and add the following:

    ```bash
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    PORT=5000
    ```

    Start the backend server:

    ```bash
    npm run dev
    ```

    The backend will be running on http://localhost:5000.

3. Frontend Setup

    Navigate to the frontend directory:
   
    ```bash
    cd ../frontend
    ```

    Install dependencies:
   
    ```bash
    npm install
    ```

    Start the frontend development server:
   
    ```bash
    npm run dev
    ```

    The frontend will be running on http://localhost:5173.

## 📚 API Documentation
## Authentication

   ####  Register a User:

        Endpoint: POST /api/auth/register

        Request Body:
        json
        Copy

        {
          "name": "John Doe",
          "email": "john@example.com",
          "password": "password123"
        }

        Response:
        json
        Copy

        {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        }

  #### Login a User:

        Endpoint: POST /api/auth/login

        Request Body:
        json
        Copy

        {
          "email": "john@example.com",
          "password": "password123"
        }

        Response:
        json
        Copy

        {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        }

## Tasks

   #### Create a Task:

        Endpoint: POST /api/tasks

        Request Body:
        json
        Copy

        {
          "title": "Complete project",
          "description": "Finish the MERN stack task manager",
          "status": "pending",
          "dueDate": "2023-12-31"
        }

        Response:
        json
        Copy

        {
          "_id": "64f8b1e2e4b0a1a2b3c4d5e6",
          "title": "Complete project",
          "description": "Finish the MERN stack task manager",
          "status": "pending",
          "dueDate": "2023-12-31T00:00:00.000Z",
          "user": "64f8b1e2e4b0a1a2b3c4d5e7",
          "createdAt": "2023-09-07T12:34:56.789Z",
          "updatedAt": "2023-09-07T12:34:56.789Z"
        }

  #### Get All Tasks:

        Endpoint: GET /api/tasks

        Response:
        json
        Copy

        [
          {
            "_id": "64f8b1e2e4b0a1a2b3c4d5e6",
            "title": "Complete project",
            "description": "Finish the MERN stack task manager",
            "status": "pending",
            "dueDate": "2023-12-31T00:00:00.000Z",
            "user": "64f8b1e2e4b0a1a2b3c4d5e7",
            "createdAt": "2023-09-07T12:34:56.789Z",
            "updatedAt": "2023-09-07T12:34:56.789Z"
          }
        ]

   #### Update a Task:

        Endpoint: PUT /api/tasks/:id

        Request Body:
        json
        Copy

        {
          "status": "completed"
        }

        Response:
        json
        Copy

        {
          "_id": "64f8b1e2e4b0a1a2b3c4d5e6",
          "title": "Complete project",
          "description": "Finish the MERN stack task manager",
          "status": "completed",
          "dueDate": "2023-12-31T00:00:00.000Z",
          "user": "64f8b1e2e4b0a1a2b3c4d5e7",
          "createdAt": "2023-09-07T12:34:56.789Z",
          "updatedAt": "2023-09-07T12:34:56.789Z"
        }

  #### Delete a Task:

        Endpoint: DELETE /api/tasks/:id

        Response:
        json
        Copy

        {
          "message": "Task deleted"
        }

## 📂 Project Structure
#### Frontend

```bash
frontend/
├── public/
├── src/
│   ├── api.js
│   ├── App.jsx
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Navbar.jsx
│   │   ├── Register.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskList.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── styles.css
│   └── main.jsx
```

### Backend

```bash
backend/
├── config/
│   └── db.js
├── controllers/
│   └── taskController.js
├── middleware/
│   └── auth.js
├── models/
│   ├── Task.js
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
└── server.js
```

# 🌐 Deployment

    Backend: 
    Frontend: 


For any questions or feedback, feel free to reach out:

    Author: Isaac Kariuki

    Email: kariukiisaac911@gmail.com


