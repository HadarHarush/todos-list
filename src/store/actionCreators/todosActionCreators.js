import { makeid } from '../../utils';

export function addTodo(todoText) {
  return {
    type: 'ADD_TODO',
    todo: {
      id: makeid(),
      text: todoText,
      isDone: false,
    },
  };
}

export function removeTodo(todoId) {
  return {
    type: 'REMOVE_TODO',
    todoId,
  };
}

export function updateTodoText(todoId, todoText) {
  return (dispatch, getState) => {
    const { todos } = getState().todosReducer;
    const pastTodo = todos.find(({ id }) => id === todoId);
    const updatedTodo = { ...pastTodo, text: todoText };
    dispatch({ type: 'UPDATE_TODO', todo: updatedTodo });
  };
}

export function updateTodoIsDoneStatus(todoId, isDone) {
  return (dispatch, getState) => {
    const { todos } = getState().todosReducer;
    const pastTodo = todos.find(({ id }) => id === todoId);
    const updatedTodo = { ...pastTodo, isDone };
    dispatch({ type: 'UPDATE_TODO', todo: updatedTodo });
  };
}
