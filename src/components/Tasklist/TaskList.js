import React, { Component } from 'react';
import TaskItem from '../TaskItem/TaskItem';

class TaskList extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            activated: 1,
        };
    }

    componentDidMount() {
        this.initiateData();
        console.log('did mount');
    }

    async initiateData() {
        await this.getData();
        console.log("Data Fetched");
    }

    async getData() {
        const listOfApisResponse = await fetch("https://swapi.dev/api/");
        // listOfApisResponse
        // .then((response) => {
        //     console.log("response", response);
        //     const jsonPromise = response.json();
        //     return jsonPromise;
        // })
        // .then(response => {
        //     console.log(response);
        // })
        // .catch(err => {
        //     console.log(err);
        // });
        console.log("promise", listOfApisResponse);
        const listOfApis = await listOfApisResponse.json();
        console.log(listOfApis);
        setTimeout(() => {
            console.log('timeout');
        });
        const filmsPromise = await fetch(listOfApis.films);
        const films = await filmsPromise.json();
        console.log(films);
    }

    activateTask = (id) => {
        // this.setState({
        //     activated: id
        // });
        console.log(id);
    }

    handleClick = (event) => {
        console.log(this);
        console.log(event);
    }

    render() {
        const { activated } = this.state;
        const { title, theme } = this.props;
        return (
            <div>
                <div onClick={this.handleClick}>{title}</div>
                <div>
                    <TaskItem id={1} taskClicked={this.activateTask} theme={activated === 1 ? theme : 'white'} />
                    <TaskItem id={2} taskClicked={this.activateTask} theme={activated === 2 ? theme : 'white'} />
                    <TaskItem id={3} taskClicked={this.activateTask} theme={activated === 3 ? theme : 'white'} />
                    <TaskItem id={4} taskClicked={this.activateTask} theme={activated === 4 ? theme : 'white'} />
                    <TaskItem id={5} taskClicked={this.activateTask} theme={activated === 5 ? theme : 'white'} />
                </div>
            </div>
        )
    }
}

export default TaskList;