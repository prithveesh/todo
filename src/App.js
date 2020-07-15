import React, { Component, useState, useCallback, useReducer, useEffect, createContext } from 'react';
import { Switch, Route, Link, withRouter, useHistory, useLocation } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import logo from './logo.png';
import TaskList from './components/Tasklist/TaskList';
import AddTask from './components/AddTask/AddTask';
import './App.css';
import { reducer, Context } from './store';

const routes = [
  {
    path: '/addTask',
    component: AddTask,
    exact: true
  },
  {
    path: '/list',
    component: () => { return (<TaskList title={'This is the title'} theme={'red'} />)},
  },
];

function App() {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, { list : [], activatedTask: 0 })

  const handleRouting = useCallback((url) => {
    history.push(url);
  }, [history]);

  console.log("state", state);

  useEffect(() => {
    console.log("state from useeffect", state);
  }, [state]);

  useEffect(() => {
    dispatch({ type: 'ADD_TASK', payload: 'Task 1'})
  }, [dispatch]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to MakeMyTrip React Training!!!
        </h1>
        <ul>
          <li onClick={() => handleRouting("/addTask")}>Add Task</li>
          <li onClick={() => handleRouting("/list")}>Task List</li>
        </ul>
        <Context.Provider value={{state, dispatch}}>
          {/* <Switch>
            <Route path="/addTask" component={AddTask}></Route>
            <Route 
              path="/list" 
              component={() => { return (<TaskList title={'this is a title'} theme={'red'} />)}}
            >
            </Route>
          </Switch> */}
          <AddTask></AddTask>
          <TaskList title={'this is a title'} theme={'red'} />
        </Context.Provider>
        {/* {renderRoutes(routes)} */}
      </header>
    </div>
  );
}

export default App;
