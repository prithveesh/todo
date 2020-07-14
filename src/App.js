import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';
import TaskListWithHooks from "./components/Tasklist/TaskListWithHooks";


class App extends Component {
  constructor() {
    super();
    this.state = {
      taskListTitle: "This is Task List title",
      unmountHookComp: false
    }
    setTimeout(() => {
      this.setState({
        taskListTitle: "New Title"
      })
    }, 2000);


  }

  componentDidMount() {
    setTimeout(() => {
      // this.setState({unmountHookComp: true})
    }, 1000)

  }

  render() {

    const {taskListTitle, unmountHookComp} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1>
            Welcome to MakeMyTrip React Training!!!
          </h1>
          {!unmountHookComp &&
          <TaskListWithHooks/>
          }
          {/*  <AddTask />
          <TaskList title={taskListTitle} theme={'red'} />*/}
        </header>
      </div>
    );
  }
}

export default App;
