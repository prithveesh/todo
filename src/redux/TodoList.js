import React from "react"

import TodoListItem from "./TodoListItem";

export default function TodoList({todoItems, toggleTodo, currentFilter, setFilter}) {
  return <div style={{margin: 12, padding: 12}}>
    <div>
      {todoItems.map(todoItem =>
        <TodoListItem
          todoItem={todoItem}
          onToggle={toggleTodo}/>)
      }

      <div>
        Filter
        <div style={{padding: 12}}>
          <span
            style={{padding: 12, fontWeight: currentFilter === "ALL" ? 'bolder' : "normal"}}
            onClick={() => setFilter("ALL")}
          >All</span>
          <span
            style={{padding: 12, fontWeight: currentFilter === "PENDING" ? 'bolder' : "normal"}}
            onClick={() => setFilter("PENDING")}
          >Pending</span>
          <span
            style={{padding: 12, fontWeight: currentFilter === "COMPLETED" ? 'bolder' : "normal"}}
            onClick={() => setFilter("COMPLETED")}
          >Finished</span>
        </div>
      </div>
    </div>
  </div>
}
