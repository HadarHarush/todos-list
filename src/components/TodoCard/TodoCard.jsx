import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  removeTodo,
  updateTodoIsDoneStatus,
  updateTodoText,
} from '../../store/actionCreators/todosActionCreators';
import './todo-card.scss';

export default function TodoCard({ todoId }) {
  const dispatch = useDispatch();
  // @ts-ignore
  const { todos } = useSelector((rootReducer) => rootReducer.todosReducer);
  const [isEdit, setIsEdit] = useState(false);
  const [textToChange, setTextToChange] = useState('');

  const todo = todos.find(({ id }) => id === todoId);

  useEffect(() => {
    setTextToChange(todo.text);
  }, [todo]);

  const onTodoRemove = () => dispatch(removeTodo(todoId));

  const onTodoSave = () => {
    dispatch(updateTodoText(todoId, textToChange));
    setIsEdit(false);
  };

  const onTodoClick = () => {
    const isDoneNewValue = !todo.isDone;
    dispatch(updateTodoIsDoneStatus(todoId, isDoneNewValue));
  };

  return (
    <div className={`todo-card flex align-center ${todo.isDone ? 'done' : ''}`}>
      <div className='content'>
        {!isEdit && (
          <p className='todo-text' onClick={onTodoClick}>
            {todo.text}
          </p>
        )}
        {isEdit && (
          <input
            onBlur={onTodoSave}
            value={textToChange}
            onChange={(ev) => setTextToChange(ev.target.value)}
          />
        )}
      </div>
      <div className='actions-bar flex align-center'>
        {!isEdit && <button onClick={() => setIsEdit(true)}>Edit</button>}
        {isEdit && <button onClick={onTodoSave}>Save</button>}
        <button onClick={onTodoRemove}>Remove</button>
      </div>
    </div>
  );
}
