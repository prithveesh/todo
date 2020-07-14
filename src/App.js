import React, { Component, useState, useCallback } from 'react';
import { Switch, Route, Link, withRouter, useHistory, useLocation } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import logo from './logo.png';
import TaskList from './components/Tasklist/TaskList';
import AddTask from './components/AddTask/AddTask';
import './App.css';

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
]

class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskListTitle: "This is Task List title"
    }
    setTimeout(() => {
      console.log("from arrow function: ", this);
      // this.setState({
      //   taskListTitle: "New Title"
      // })
    }, 2000);
    setTimeout(function() {
      console.log("from function: ", this);
    }, 2000);
    setTimeout(function() {
      console.log("from bind function: ", this);
    }.bind(this), 2000);
  }

  handleRouting = (url) => {
    const { history, location } = this.props;
    // console.log(location.pathname);
    if(location.pathname === '/') {
      history.push(url);
    }
  }

  render() {

    const { taskListTitle } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Welcome to MakeMyTrip React Training!!!
          </h1>
          <ul>
            <li onClick={() => this.handleRouting("/addTask")}>Add Task</li>
            <li onClick={() => this.handleRouting("/list")}>Task List</li>
          </ul>
          {/* <Switch>
            <Route path="/addTask" component={AddTask}></Route>
            <Route 
              path="/list" 
              component={() => { return (<TaskList title={taskListTitle} theme={'red'} />)}}
            >
            </Route>
          </Switch> */}
          {renderRoutes(routes)}
        </header>
      </div>
    );
  }
}

function App(props) {
  const history = useHistory();
  const location = useLocation();

  const handleRouting = useCallback((url) => {
    console.log(location.pathname);
    history.push(url);
  }, [history, location]);


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
        <Switch>
          <Route path="/addTask" component={AddTask}></Route>
          <Route 
            path="/list" 
            component={() => { return (<TaskList title={'this is a title'} theme={'red'} />)}}
          >
          </Route>
        </Switch>
        {/* {renderRoutes(routes)} */}
      </header>
    </div>
  );
}

// export default withRouter(App);
export default App;
