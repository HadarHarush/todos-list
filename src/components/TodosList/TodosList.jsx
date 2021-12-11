import { useSelector } from 'react-redux';
import TodoCard from '../TodoCard/TodoCard';
import './todos-list.scss';

export default function TodosList() {
  // @ts-ignore
  const { todos } = useSelector((rootReducer) => rootReducer.todosReducer);

  return (
    <div className='todos-list'>
      {todos.map(({ id }) => (
        <TodoCard key={id} todoId={id} />
      ))}
    </div>
  );
}
