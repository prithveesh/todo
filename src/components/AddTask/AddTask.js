import React, { Component } from 'react';
import './addTask.css';

// uncontrolled form elements
// controlled form elements
// refs

class AddTask extends Component {
    constructor() {
        super();
        this.state = {
            taskName: '',
            taskDescription: ''
        }
        this.formRef = React.createRef();
    }

    componentWillMount() {
        console.log("componentWillMount: ", this.formRef.current);
    }
    
    componentDidMount() {
        console.log("componentDidMount: ", this.formRef.current);
        // this.formRef.current.addEventListener('submit', this.handleSubmitWithRef);
    }

    handleSubmitWithEvent = (event) => {
        event.preventDefault();
        console.log(event);
        console.log(event.target);
        console.log(event.target.taskName);
        console.log(event.target.taskName.value);
    }
    handleSubmitWithRef = (event) => {
        event.preventDefault();
        console.log(event);
        console.log(this.formRef.current);
        console.log(this.formRef.current.taskName);
        console.log(this.formRef.current.taskName.value);
    }
    handleSubmitWithButton = () => {
        console.log(this.formRef.current);
        console.log(this.formRef.current.taskName);
        console.log(this.formRef.current.taskName.value);
    }

    handleChange = (name, event) => {
        let value = event.target.value;
        // value = value.replace(/e/ig, '10');
        if(!isNaN(event.target.value)) {
            this.setState({
                [name]: value
            });
        }
    }

    render() {
        const { taskName, taskDescription } = this.state;
        return (
            <form 
                ref={this.formRef}
                className="form"
                onSubmit={this.handleSubmitWithEvent}
                autoComplete="off"
            >
                <input 
                    className="inputField" 
                    name="taskName" 
                    type="text" 
                    placeholder="Task Name" 
                    value={taskName}
                    autoComplete="off"
                    onChange={(event) => this.handleChange('taskName', event)}
                />
                <input 
                    className="inputField" 
                    name="taskDescription" 
                    type="text" 
                    placeholder="Task Description" 
                    value={taskDescription} 
                    onChange={(event) => this.handleChange('taskDescription', event)}
                />
                <button 
                    className="button" 
                    type="submit"
                >
                    Submit Form
                </button>
                <button 
                    className="button" 
                    type="button"
                    onClick={this.handleSubmitWithButton}
                >
                    Add Task
                </button>
            </form>
        )
    }
}

export default AddTask;