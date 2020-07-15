import {connect} from 'react-redux'
import TodoList from "./TodoList";

function mapStateToProps(state) {
  const {todoListItems, currentFilter} = state
  const todoItems = todoListItems.filter((item) => {
    if (currentFilter === "ALL") {
      return true;
    }
    if (currentFilter === "COMPLETED") {
      return item.completed === true
    }
    if (currentFilter === "PENDING") {
      return item.completed === false
    }
  })
  return {
    todoItems: todoItems,
    currentFilter
  }
}

function mapDispatchProps(dispatch) {
  return {
    toggleTodo: (todo) => {
      dispatch({
        type: "TOGGLE_TODO",
        data: todo
      })
    },
    setFilter: (filter) => {
      dispatch({
        type: "SET_FILTER",
        data: filter
      })
    }
  }
}


export default connect(mapStateToProps, mapDispatchProps)(TodoList)
