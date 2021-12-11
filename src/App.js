import './App.css';
import './assets/style/main.scss';
import TodosList from './components/TodosList/TodosList';
import CreateTodoBar from './components/CreateTodoBar/CreateTodoBar';

function App() {
  return (
    <div className='App'>
      <h1>Todos App</h1>
      <CreateTodoBar />
      <TodosList />
    </div>
  );
}

export default App;
