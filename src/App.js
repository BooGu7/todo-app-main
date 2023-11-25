import "./App.scss";
import { HeaderTodo, TaskTodo, FooterTodo } from "./components";

function App() {
  return (
    <div className="todo-app bg-light">
      <div className="todo-app_container">
        <HeaderTodo />
        <TaskTodo />
        <FooterTodo />
      </div>
    </div>
  );
}

export default App;
