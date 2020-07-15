import React from 'react';

export default function TodoListItem({todoItem, onToggle}) {
  return <div onClick={() => onToggle(todoItem)} style={{padding: 12, margin: 12, border:'1px solid black'}}>
    <input type={"checkbox"} checked={todoItem.completed}/>
    {todoItem.text}
  </div>
}
