import React, { Component } from 'react';
import logo from './logo.png';
import TaskList from './components/Tasklist/TaskList';
import AddTask from './components/AddTask/AddTask';
import './App.css';




class App extends Component {
  constructor() {
    super();
    this.state = {
      taskListTitle: "This is Task List title"
    }
    setTimeout(() => {
      this.setState({
        taskListTitle: "New Title"
      })
    }, 2000);
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
          <AddTask />
          <TaskList title={taskListTitle} theme={'red'} />
        </header>
      </div>
    );
  }
}

export default App;
