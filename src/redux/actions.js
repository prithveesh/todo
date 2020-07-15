export function actionAddTodo(text) {
  console.log('@rajesh actionAddTodo')
  const todoItem = {text, completed: false}
  return {
    type: "ADD_TODO",
    data: todoItem
  }
}

export function actionToggleTodo(todoItem) {
  return {
    type: "TOGGLE_TODO",
    data: todoItem
  }
}
