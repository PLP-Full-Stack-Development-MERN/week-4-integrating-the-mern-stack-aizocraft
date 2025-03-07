

---

# **MERN Stack Task Manager**

## **Project Overview**

Welcome to the **Task Manager** application, a full-stack web app built with the **MERN stack** (MongoDB, Express, React, Node.js). This application allows users to **Create, Read, Update, and Delete (CRUD)** tasks. Each task includes details like title, description, status, and due date. The backend serves the data while the frontend provides an interactive and dynamic user interface.

### **Key Features**
- **Create, Read, Update, Delete (CRUD)** tasks.
- Task details: Title, Description, Status, Due Date.
- Responsive design using **React** and **Vite**.
- API interaction with the backend using **Axios**.
- Deployment ready for production on platforms like **Render** and **Vercel**.

---

## **Table of Contents**

1. [Installation Guide](#installation-guide)
2. [Backend Setup](#backend-setup)
3. [Frontend Setup](#frontend-setup)
4. [Project Structure](#project-structure)
5. [API Integration](#api-integration)
6. [Deployment](#deployment)
7. [Testing](#testing)
8. [License](#license)
9. [Contact](#contact)

---

## **Installation Guide**

Follow these steps to get the project running locally.

### **1. Clone the Repository**

```bash
git clone https://github.com/PLP-Full-Stack-Development-MERN/week-4-integrating-the-mern-stack-aizocraft.git
cd week-4-integrating-the-mern-stack-aizocraft
```

### **2. Backend Setup**

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following (adjust as needed):

   ```
   MONGO_URI=your-mongodb-connection-uri
   PORT=5000
   ```

4. Run the backend server:

   ```bash
   npm run dev
   ```

   The backend will be running on `http://localhost:5000`.

### **3. Frontend Setup**

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   The frontend will be running on `http://localhost:3000`.

---

## **Backend Setup**

### **Project Structure**

The backend is built with **Node.js**, **Express**, and **MongoDB**. The backend communicates with the frontend through RESTful API endpoints for task management.

```
/backend
│── /models                 # Mongoose models (e.g., Task)
│── /routes                 # API routes for tasks
│── /controllers            # Controllers for handling requests
│── server.js               # Express server and connection to MongoDB
│── .env                    # Environment variables (e.g., MongoDB URI)
│── package.json            # Backend dependencies and scripts
```

### **Key Files**

- **server.js**: The main entry point, sets up the Express server and connects to MongoDB.
- **models/Task.js**: Defines the Task model with fields like title, description, status, and due date.
- **routes/taskRoutes.js**: Defines the API routes for CRUD operations.
- **controllers/taskController.js**: Handles the logic for each API route.

---

## **Frontend Setup**

### **Project Structure**

The frontend is built with **React** and **Vite** for fast development and a modern user interface.

```
/frontend
│── /components             # Reusable components (TaskList, TaskForm, TaskItem)
│── /api.js                 # API calls for interacting with the backend
│── App.jsx                 # Main React component with routing
│── main.jsx                # Entry point for React
│── styles.css              # Global styles (CSS)
│── vite.config.js          # Vite configuration
│── package.json            # Frontend dependencies and scripts
```

### **Key Files**

- **App.jsx**: The main component that contains routing and layout for the app.
- **api.js**: Contains functions to interact with the backend API using **Axios**.
- **components/TaskList.jsx**: Displays a list of tasks.
- **components/TaskForm.jsx**: A form for creating and editing tasks.
- **components/TaskItem.jsx**: Represents an individual task and allows editing and deletion.

---

## **API Integration**

The frontend communicates with the backend using **Axios** for making HTTP requests.

### **API Functions (api.js)**

1. **Get All Tasks**:

   ```javascript
   export const getTasks = async () => {
       const response = await axios.get('http://localhost:5000/api/tasks');
       return response.data;
   };
   ```

2. **Create a Task**:

   ```javascript
   export const createTask = async (taskData) => {
       const response = await axios.post('http://localhost:5000/api/tasks', taskData);
       return response.data;
   };
   ```

3. **Update a Task**:

   ```javascript
   export const updateTask = async (id, taskData) => {
       const response = await axios.put(`http://localhost:5000/api/tasks/${id}`, taskData);
       return response.data;
   };
   ```

4. **Delete a Task**:

   ```javascript
   export const deleteTask = async (id) => {
       const response = await axios.delete(`http://localhost:5000/api/tasks/${id}`);
       return response.data;
   };
   ```

---

## **Deployment**

### **Backend Deployment**

1. Deploy the backend to a platform like **Render** or **Heroku**.
2. Ensure the backend is accessible and the MongoDB connection is correctly configured.

### **Frontend Deployment**

1. Deploy the frontend to **Vercel**, **Netlify**, or other static site hosting platforms.
2. Set the frontend’s API base URL to the deployed backend.

---

## **Testing**

### **Backend Testing**

- Use **Postman** to test the CRUD API endpoints (GET, POST, PUT, DELETE).

### **Frontend Testing**

- Ensure CRUD operations work correctly by interacting with the UI.
- Use **React Developer Tools** to inspect state and props during development.

---

## **License**

This project is licensed under the **MIT License**.

---

## **Contact**

For any questions or feedback, feel free to reach out:

- **Author**: Isaac Kariuki
- **Email**: kariukiisaac911@gmail.com

---

This **MERN Stack Task Manager** project serves as an example of full-stack development using the **MongoDB**, **Express**, **React**, and **Node.js** stack, with a focus on CRUD operations and smooth integration between the frontend and backend.

