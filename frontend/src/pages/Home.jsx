import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const Home = () => {
  return (
    <div className="home">
      <h1>Task Manager</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;