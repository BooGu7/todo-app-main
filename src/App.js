import './App.css';
import { HeaderTodo, TaskTodo, FooterTodo } from './components'

function App() {
  return (
    <div className="todo-app bg-light">
      <HeaderTodo />
      <TaskTodo />
      <FooterTodo />
    </div>
  );
}

export default App;
