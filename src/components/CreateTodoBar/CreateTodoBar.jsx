import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/actionCreators/todosActionCreators';

export default function CreateTodoBar() {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  const onAddTodo = () => {
    dispatch(addTodo(todoText));
    setTodoText('');
  };

  return (
    <div className='create-todo-bar'>
      <input
        type='text'
        value={todoText}
        onChange={(ev) => setTodoText(ev.target.value)}
      />
      <button onClick={onAddTodo}>Create</button>
    </div>
  );
}
