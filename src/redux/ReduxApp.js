import React from 'react'
import {Provider} from 'react-redux'
import TodoListContainer from "./TodoListContainer";
import AddTodo from "./AddTodo";
import store from './store'

export default function ReduxApp() {
  return <Provider store={store}>
    <div style={{margin: 12, padding: 12}}>
      <AddTodo/>
      <TodoListContainer/>
    </div>
  </Provider>

}

/*



* State
* Actions
* View
*
*
*
* */
