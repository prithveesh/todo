const initialState = {
  todoListItems: [],
  currentFilter: 'ALL',
}

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodoItem = action.data
      const updatedTodoList = [...state.todoListItems, newTodoItem]
      return {
        ...state,
        todoListItems: updatedTodoList
      }
    }
    case "TOGGLE_TODO": {
      const updatedTodoItem = action.data
      const updatedTodoList = state.todoListItems.map((todoItem) => {
        if (todoItem === updatedTodoItem) {
          return {
            ...todoItem,
            completed: !todoItem.completed
          }
        }
        return todoItem;
      })
      return {
        ...state,
        todoListItems: updatedTodoList
      }
    }

    case "SET_FILTER":{
      return {
        ...state,
        currentFilter: action.data
      }
    }

    default:
      return state;

  }


  return state
}
