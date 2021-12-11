const INITIAL_STATE = {
  todos: [],
};

export const todosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };

    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== action.todoId),
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map((currTodo) =>
          currTodo.id !== action.todo.id ? currTodo : action.todo
        ),
      };
    default:
      return state;
  }
};
