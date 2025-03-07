import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm fetchTasks={() => {}} />
      <TaskList />
    </div>
  );
}

export default App;
